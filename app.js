import express from "express";

import getData from "./middlewares/getData.js";
import router from "./router/index.js";

const app = express();
const PORT = process.env.PORT || 9000;

app.set("views", "./views");
app.set("view engine", "ejs");

app
    .use(express.static("public"))
    .use(getData)
    .use(router);

app.listen(PORT, ()=>{
    console.log(`listening at http://localhost:${PORT}`);
});