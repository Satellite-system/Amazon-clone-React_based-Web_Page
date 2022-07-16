import axios from "axios";

const instance = axios.create({
   baseURL: 'http://localhost:5001/clone-f6b6a/us-central1/api' // The Api {cloud function} URL
});

export default instance;