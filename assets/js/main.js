import { handleMessageNoti } from "./chat";

const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
}

function setNicname(nickname) {
  socket.emit("setNickname", { nickname });
}

socket.on("messageNoti", handleMessageNoti);
