import { observable, action } from "mobx";

class UserStore {

  @observable isLogged = false;//登录的状态，YES为登录，NO为退出

  @action loginAction = () => {

  }
}

const userStore = new UserStore();
export { userStore };