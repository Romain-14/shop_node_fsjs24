import { readFile } from "fs";

export default (req, res, next) => {
    readFile("./data/product.json", "utf8", (error, data) => {
        if(error) {
            console.log("ERROR",error);
            res.end();
            return;
        }
        res.locals.datas = JSON.parse(data);
        next();
    });
}