export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._token = options.headers.authorization;
    this._headers = options.headers;
  }

  _baseGetMethod(addString) {
    return fetch(`${this._baseUrl}${addString}`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  _baseMethodWithBody(addString, method, jsonObject) {
    return fetch(`${this._baseUrl}${addString}`, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(jsonObject),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getUserInfo() {
    return this._baseGetMethod("/users/me");
  }

  getCardsArray() {
    return this._baseGetMethod("/cards");
  }

  patchUserInfo(userData) {
    return this._baseMethodWithBody("/users/me", "PATCH", userData);
  }

  patchUserAvatar(userData) {
    return this._baseMethodWithBody("/users/me/avatar", "PATCH", userData);
  }

  postCardData(cardData) {
    return this._baseMethodWithBody("/cards", "POST", cardData);
  }

  deleteCard(cardId) {
    return this._baseMethodWithBody(`/cards/${cardId}`, "DELETE", {});
  }

  setLike(cardId) {
    return this._baseMethodWithBody(`/cards/${cardId}/likes`, "PUT", {});
  }

  deleteLike(cardId) {
    return this._baseMethodWithBody(`/cards/${cardId}/likes`, "DELETE", {});
  }
}
