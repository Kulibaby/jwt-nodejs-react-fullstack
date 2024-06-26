import express from "express";
import homeController from "../controller/homeControler";

const router = express.Router();

/**
 *
 * @param {*} app express app
 */
const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWord);
  router.get("/user", homeController.handleUserPage);

  return app.use("/", router);
};

export default initWebRoutes;
