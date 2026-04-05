const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/status:
 *   get:
 *     summary: status check API
 *     responses:
 *       200:
 *         description: Server is running
 */
router.get("/status", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = router;
