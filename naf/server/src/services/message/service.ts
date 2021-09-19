import { Message } from "./types";

export default {
  getAllMessages: (): Message[] => {
    return [{ body: "hai how are you!", sender: "Mabroor Ahmad" }];
  },
};
