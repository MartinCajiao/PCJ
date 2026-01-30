// scripts/Api.js
export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl; 
    this._headers = headers;
  }

  sendMessage(message) {
    return fetch(`${this._baseUrl}/chat`, { 
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ message: message })
    })
    .then(res => {
      if (res.ok) return res.json();
      return Promise.reject(`Error en el servidor: ${res.status}`);
    });
  }
}