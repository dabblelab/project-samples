import MessageService from "./service";

describe("Message Service should work", () => {
  it("should return a list of messages", () => {
    expect(MessageService.getAllMessages()).toStrictEqual([
      { body: "hai how are you!", sender: "Mabroor Ahmad" },
    ]);
  });
});
