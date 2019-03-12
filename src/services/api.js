// TODO: still needed with promise polyfill loaded at top level?
import 'core-js/es6/promise.js'; // Promise polyfill for IE
import axios from 'axios';

export default class Api {

    /**
     * Gets basic account information from Instagram
     *
     * @return {Promise}
     */
    static getInstagramAccountInfo(token) {
        return axios.get('https://api.instagram.com/v1/users/self/?access_token=' + token);
    }
}
