import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import companyRouter from "./routes/company.routes.js";

const PORT = 3000;
const app = express();

//DB
connectDB();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

//ROUTES
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/company", companyRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
