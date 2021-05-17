import { constants } from "../../_shared/constants.js";
import SocketBuilder from "../../_shared/socketBuilder.js";

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room,
});

const socket = socketBuilder
  .onUserConnected((user) => console.log("user connected: ", user))
  .onUserDisconnected((user) => console.log("user disconnected: ", user))
  .build();

const room = {
  id: Date.now(),
  top: "JS Expert",
};

const user = {
  img: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__9-256.png",
  username: "lucianovianna",
};

socket.emit(constants.events.JOIN_ROOM, { user, room });
