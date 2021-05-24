import { constants } from "../../_shared/constants.js";
import LobbyController from "./controller.js";
import LobbySocketBuilder from "./util/lobbySocketBuilder.js";
import View from "./view.js";

const user = {
  img: "https://cdn4.iconfinder.com/data/icons/smileys-for-fun/128/smiley__9-256.png",
  username: "lucianovianna" + Date.now(),
};

const socketBuilder = new LobbySocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.lobby,
});

const dependencies = {
    socketBuilder,
    user,
    view: View
}

await LobbyController.initialize(dependencies);
