import 'signalr/jquery.signalR';

export interface IPortfolioSignalRClient {
  stopSubscription(): void;
}

const serviceUrl = 'https://localhost:44365';
const hubName = 'webhub';
const reconnectTimeout = 1000;
let signalRHubProxy: SignalR.Hub.Proxy | null = null;

export class PortfolioSignalRClient implements IPortfolioSignalRClient {
  constructor(onReceived: (message: any) => void, onReconnecting: () => void) {
    if (!signalRHubProxy) {
      signalRHubProxy = this.initializeClient(onReceived, onReconnecting);
    }
  }

  private initializeClient(
    onReceived: (message: any) => void,
    onReconnecting: () => void,
  ) {
    const signalRHub = $.hubConnection(serviceUrl, {
      qs: hubName,
    } as SignalR.Hub.Options);

    const proxy = signalRHub.createHubProxy(hubName);

    proxy.on('ReceiveMessage', onReceived);
    proxy.connection.reconnecting(onReconnecting);
    proxy.connection.disconnected(() => {
      setTimeout(
        () => {
          if (signalRHubProxy) {
            signalRHubProxy = this.initializeClient(onReceived, onReconnecting);
          }
        },
        Math.min(reconnectTimeout * 2, 30000),
      );
    });
    proxy.connection
      .start()
      .done(() => {
        console.log('SignalR Connected');
      })
      .fail((error) => {
        console.error('SignalR Connection Error:', error);
      });

    return proxy;
  }

  stopSubscription(): void {
    if (
      signalRHubProxy &&
      signalRHubProxy.connection.state !==
        $.signalR.connectionState.disconnected
    ) {
      signalRHubProxy?.connection.stop();
    }

    signalRHubProxy = null;
  }
}
