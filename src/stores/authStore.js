import { action, observable } from 'mobx';
import authService from '../services/authService';
import { toast } from "react-toastify";
import { writeLocalStorage } from '../helpers';


class AuthStore {
    @observable loggedUser = {};

    @action
    async auth(payload) {
        let result = await authService.auth(payload);
        this.loggedUser = result.data;
        if (result.data.token) {
            toast.success("Başarıyla Giriş Yapıldı");
            writeLocalStorage('userData', result.data.userInfo)
            writeLocalStorage('token', result.data.token)
        }
        return result;
    }
}

export default AuthStore;