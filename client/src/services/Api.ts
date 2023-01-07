import axios from "axios";

export const Api = axios.create({
  baseURL: 'https://pf7ogb5h9i.execute-api.us-east-1.amazonaws.com/Prod'
});

// export const Api = axios.create({
//   baseURL: 'https://y53twdwso0.execute-api.eu-central-1.amazonaws.com/Development'
// });