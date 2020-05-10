const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
}

function setNicname(nickname) {
  socket.emit("setNickname", { nickname });
}

function handleMessageNoti(data) {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
}

socket.on("messageNoti", handleMessageNoti);
