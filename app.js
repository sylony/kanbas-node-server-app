// const express = require("express");
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import "dotenv/config";

import mongoose from "mongoose";
// mongoose.connect(`mongodb://cy:woaini777@127.0.0.1:25207/kanbas?authSource=admin`);
// mongodb+srv://cy:635950334@atlascluster.tjrxpze.mongodb.net/
mongoose.connect(`mongodb+srv://cy:635950334@atlascluster.tjrxpze.mongodb.net/kanbas?authSource=admin`, {
    serverSelectionTimeoutMS: 60000
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error('Could not connect to MongoDB', err));

import UserRoutes from "./modules/users/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
HelloRoutes(app);

app.listen(4000);
