import http from "http";
import { Server } from "socket.io";

export default class SocketServer {
  #io; // variavel privada

  constructor({ port }) {
    this.port = port;
  }

  async start() {
    const server = http.createServer((request, response) => {
      response.writeHead(200, {
        "Acess-Control-Allow-Origin": "*",
        "Acess-Control-Allow-Methods": "OPTIONS, POST, GET",
      });

      response.end("hey there");
    });

    this.#io = new Server(server, {
      cors: {
        origin: "*",
        credentials: false,
      },
    });

    const room = this.#io.of("/room");
    server.on("connection", (socket) => {
      socket.emit("userConnection", "socket id se conectou " + socket.id);

      socket.on("joinRoom", (dados) => {
        console.log("dados recebidos:", dados);
      });
    }); // testando o socket.io

    return new Promise((resolve, reject) => {
      server.on("error", reject);

      server.listen(this.port, () => resolve(server));
    });
  }
}
