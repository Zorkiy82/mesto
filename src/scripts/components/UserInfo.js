export class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._userNameElement = document.querySelector(nameSelector);
    this._userAboutElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    const nameText = this._userNameElement.textContent;
    const aboutText = this._userAboutElement.textContent;

    return { nameText: nameText, aboutText: aboutText };
  }

  setUserInfo({ nameText, aboutText }) {
    this._userNameElement.textContent = nameText;
    this._userAboutElement.textContent = aboutText;
  }
}
