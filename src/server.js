import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as ramber from "@ramber/server";
import { json } from "body-parser";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(
    json(),
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    ramber.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
