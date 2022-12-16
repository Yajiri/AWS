import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://8xob0txpdb.execute-api.eu-north-1.amazonaws.com/default'
});

export default (endpoint) => {
  return axios.create({
    baseURL: 'https://8xob0txpdb.execute-api.eu-north-1.amazonaws.com/default'
  })
}