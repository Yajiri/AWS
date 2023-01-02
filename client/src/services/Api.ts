import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://lhsqon6i0j.execute-api.eu-central-1.amazonaws.com/v3'
});

// export const Api = axios.create({
//   baseURL: 'https://y53twdwso0.execute-api.eu-central-1.amazonaws.com/Development'
// });