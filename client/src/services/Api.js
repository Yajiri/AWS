import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://lhsqon6i0j.execute-api.eu-central-1.amazonaws.com/v3'
});

export default (endpoint) => {
  return axios.create({
    baseURL: 'https://lhsqon6i0j.execute-api.eu-central-1.amazonaws.com/v3'
  })
}