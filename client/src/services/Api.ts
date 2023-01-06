import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://2jibct5kc9.execute-api.eu-central-1.amazonaws.com/Prod'
});

// export const Api = axios.create({
//   baseURL: 'https://y53twdwso0.execute-api.eu-central-1.amazonaws.com/Development'
// });