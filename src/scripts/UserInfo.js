export class UserInfo {
  constructor({ infoSelector }) {
    this._info = infoSelector;
    this._name = document.querySelector(this._info.name);
    this._about = document.querySelector(this._info.about);
  }
  getUserInfo() {
    this._userData = {};
    this._userData.name = this._name.textContent;
    this._userData.about = this._about.textContent;
    return this._userData;
  }
  setUserInfo(formData) {
    this._name.textContent = formData.name;
    this._about.textContent = formData.about;
  }
}
