import express from "express";
import dotenv from "dotenv";
import { router } from "./api/router.js";
import { Logger } from "./utils/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
    Logger.info(`[+] OMNIBUS engine running on port ${PORT}`);
});
