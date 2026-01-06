const router = require("express").Router();
const auth = require("../../middlewares/auth.middleware");
const allow = require("../../middlewares/role.middleware");
const controller = require("./timeoff.controller");

router.post("/", auth, allow("EMPLOYEE"), controller.request);
router.get("/me", auth, controller.mine);
router.post("/:id/approve", auth, allow("MANAGER"), controller.approve);
router.get("/", auth, allow("HR"), controller.all);

module.exports = router;
