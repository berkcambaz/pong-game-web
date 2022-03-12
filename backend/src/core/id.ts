import { server } from "..";

export function generateId(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";

  for (let i = 0; i < length; ++i) {
    const index = Math.floor(Math.random() * characters.length);
    id += characters[index];
  }

  return id;
}

export function generateClientId() {
  for (let i = 0; i < 5; ++i) {
    const id = generateId(5);
    if (!server.network.clients[id]) return id;
  }

  return "";
}

export function generateRoomId() {
  // TODO: Implement
}