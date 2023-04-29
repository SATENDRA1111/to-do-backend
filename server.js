import { app } from "./app.js";
import { connectdb } from "./data/database.js";

connectdb();
// process.env.port = 4000
app.listen(process.env.port,()=> {
    console.log("server is working");
})