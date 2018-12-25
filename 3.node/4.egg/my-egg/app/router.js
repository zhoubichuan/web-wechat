"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/query", controller.home.query);
  router.post("/add", controller.home.add);
  // router.update("/update", controller.home.update);
  // router.delete("/delete", controller.home.delete);
};
