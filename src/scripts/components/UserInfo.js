export class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._userNameElement = document.querySelector(nameSelector);
    this._userAboutElement = document.querySelector(aboutSelector);
    this._userAvatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const nameText = this._userNameElement.textContent;
    const aboutText = this._userAboutElement.textContent;

    return { nameText: nameText, aboutText: aboutText };
  }

  setUserData(userData){
    this._userAvatarElement.src = userData.avatar;
    this._userNameElement.textContent = userData.name;
    this._userAboutElement.textContent = userData.about;
    this._id = userData._id;
  }

  getUserId(){
    return this._id;
  }


}
