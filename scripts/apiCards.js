// CardService.js
export class CardService {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // Solo dejamos el método que realmente vas a usar
  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(this._handleResponse);
  }
}

// Creamos la instancia con un nombre que no confunda
export const localService = new CardService({
  baseUrl: "https://api-datos-web.onrender.com"
});