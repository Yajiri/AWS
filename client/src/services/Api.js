import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://gkqelv32pk.execute-api.eu-central-1.amazonaws.com/Development'
});

export default (endpoint) => {
  return axios.create({
    baseURL: ' https://gkqelv32pk.execute-api.eu-central-1.amazonaws.com/Development'
  })
}