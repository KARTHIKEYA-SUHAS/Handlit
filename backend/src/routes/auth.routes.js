const router = require("express").Router();
const authService = require("../utils/auth.service");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Karthik
 *               email:
 *                 type: string
 *                 example: karthik@mail.com
 *               password:
 *                 type: string
 *                 example: test@123
 *     responses:
 *       200:
 *         description: User registered successfully
 */
router.post("/register", async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: karthik@mail.com
 *               password:
 *                 type: string
 *                 example: test@123
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;
