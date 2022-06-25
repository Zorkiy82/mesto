export class Api{
  constructor(options){
    this._baseUrl = options.baseUrl;
    this._token = options.headers.authorization;
  }

  // getBaseOptions(){
  //   alert(this._baseUrl);
  //   alert(JSON.stringify(this._headers));
  // }
_baseGetMetod(addString){
  return fetch(`${this._baseUrl}${addString}`,{headers: {
    authorization: this._token}})
    .then(res => {
      if (res.ok) {
        return res.json()
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

  getUserInfo(){
    return this._baseGetMetod('/users/me');
  }

  getCardsArray(){
    return this._baseGetMetod('/cards');

  }

  // getInitialCards() {
  //   return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
  //     headers: {
  //       authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
  //     }
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       }

  //       // если ошибка, отклоняем промис
  //       return Promise.reject(`Ошибка: ${res.status}`);
  //     });
  // }
}
