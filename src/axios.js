import axios from "axios";

const instance = axios.create({
   baseURL: 'https://adarsh-amazon-clone-api.herokuapp.com' // The Api {cloud function} URL
});

export default instance;