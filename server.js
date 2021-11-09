const express = require("express");
const cors = require("cors");
var admin = require("firebase-admin");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());
const port = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;

//firestore setup
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
var serviceAccount = require("./assignment-12-42672-firebase-adminsdk-glxz3-48feb4cdd6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
//firestore initial
const db = getFirestore();

//r server running messages
app.get("/", (req, res) => {
  res.send("server is listening");
});

//server listening on
app.listen(port, () => {
  console.log("listening on port", port);
});
