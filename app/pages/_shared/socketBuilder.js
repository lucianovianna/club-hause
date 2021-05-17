import { constants } from "./constants.js";

export default class SocketBuilder {
  constructor({ socketUrl, namespace }) {
    this.socketUrl = `${socketUrl}/${namespace}`;

    this.onUserConnected = () => {};
    this.onUserDisconnected = () => {};
  }

  setOnUserConnected(foo) {
    this.onUserConnected = foo;
    return this;
    // retorna this para que seja possivel continuar usando os setters
  }

  setOnUserDisconnected(foo) {
    this.onUserDisconnected = foo;
    return this;
  }

  build() {
    // globalThis.io vai acessar a variavel criada no pacote do CDN do socket.io
    const socket = globalThis.io.connect(this.socketUrl, {
      withCredentials: false,
    });

    socket.on("connection", () => console.log());

    socket.on(constants.events.USER_CONNECTED, this.onUserConnected);
    socket.on(constants.events.USER_DISCONNECTED, this.onUserDisconnected);

    return socket;
  }
}
