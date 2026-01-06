const router = require("express").Router();

router.use("/auth", require("./modules/auth/auth.routes"));
router.use("/timeoff", require("./modules/timeoff/timeoff.routes"));

module.exports = router;
