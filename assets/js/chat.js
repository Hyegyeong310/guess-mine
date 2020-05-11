export function handleMessageNoti(data) {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
}
