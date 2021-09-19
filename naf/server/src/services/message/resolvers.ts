import MessageService from "./service";

export default {
  Query: {
    messages: () => MessageService.getAllMessages(),
  },
};
