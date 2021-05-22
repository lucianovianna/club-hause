import { constants } from "../../_shared/constants.js";
import RoomSocketBuilder from "./util/roomSocket.js";

const socketBuilder = new RoomSocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room,
});

const socket = socketBuilder
  .setOnUserConnected((user) => console.log("user connected: ", user))
  .setOnUserDisconnected((user) => console.log("user disconnected: ", user))
  .setOnRoomUpdated((room) => console.log("room list:", room))
  .build();

const room = {
  id: "0001",
  top: "JS Expert",
};

const user = {
  img: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__9-256.png",
  username: "lucianovianna" + Math.random(),
};

socket.emit(constants.events.JOIN_ROOM, { user, room });
