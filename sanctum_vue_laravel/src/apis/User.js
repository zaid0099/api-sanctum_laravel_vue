import Api from './Api';
// import Api2 from './Api';
import Csrf from './Csrf';

export default {
    async register(form) {
        await Csrf.getCookie();
        return Api.post('/register', form);
    },

    async login(form) {
        await Csrf.getCookie();
        return Api.post('/login', form);
    },

    async logout() {
        await Csrf.getCookie();
        return Api.post('/logout');
    },

    async tasks(id) {
        // await Csrf.getCookie();
        return Api.get(`/users/${id}`);
    },

    auth() {
        return Api.get('/user');
    },
};