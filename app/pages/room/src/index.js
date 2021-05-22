import { constants } from "../../_shared/constants.js";
import SocketBuilder from "../../_shared/socketBuilder.js";

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room,
});

const socket = socketBuilder
  .setOnUserConnected((user) => console.log("user connected: ", user))
  .setOnUserDisconnected((user) => console.log("user disconnected: ", user))
  .build();

const room = {
  id: '0001',
  top: "JS Expert",
};

const user = {
  img: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__9-256.png",
  username: "lucianovianna" + Math.random(),
};

socket.emit(constants.events.JOIN_ROOM, { user, room });
