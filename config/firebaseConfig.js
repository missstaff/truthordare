import { initializeApp } from 'firebase/app';

const serviceAccount = require("./serviceAccountKey.json");
const app = initializeApp({
  credential: serviceAccount
});

export default app;

