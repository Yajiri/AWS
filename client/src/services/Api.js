import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://hd8yi7kkp3.execute-api.eu-central-1.amazonaws.com/Prod'
});

export default (endpoint) => {
  return axios.create({
    baseURL: 'https://hd8yi7kkp3.execute-api.eu-central-1.amazonaws.com/Prod'
  })
}