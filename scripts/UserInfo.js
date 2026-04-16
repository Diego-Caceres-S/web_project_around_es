class UserInfo {
  constructor({ nameSelector, JobSelector }) {
    this._nameSelector = nameSelector;
    this._JobSelector = JobSelector;
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      job: this._JobSelector.textContent,
    };
  }

  setUserInfo({ data }) {
    this._nameSelector.textContent = data.name;
    this._JobSelector.textContent = data.job;
  }
}
