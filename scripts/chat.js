// scripts/Chat.js
export default class Chat {
  constructor(containerSelector) {
    this._container = document.querySelector(containerSelector);
  }

  renderMessage(text, type) {
    const messageElement = document.createElement("div");
    // Usamos las clases de tu chat.css
    messageElement.classList.add("message", `message_type_${type}`);
    messageElement.textContent = text;
    
    this._container.appendChild(messageElement);
    
    // Auto-scroll para ver el último mensaje
    this._container.scrollTop = this._container.scrollHeight;
  }
}