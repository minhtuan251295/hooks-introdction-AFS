import axios from "axios";

const api = axios.create({
  baseURL: "https://5f6e8921adc24200166e08e9.mockapi.io/api",
  headers: {
    //bla
  }
})

export default api;