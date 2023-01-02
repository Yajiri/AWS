import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://y53twdwso0.execute-api.eu-central-1.amazonaws.com/Development'
});

export default (endpoint) => {
  return axios.create({
    baseURL: 'https://y53twdwso0.execute-api.eu-central-1.amazonaws.com/Development'
  })
}