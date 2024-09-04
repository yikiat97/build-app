const express = require('express');
const userController = require('../controllers/userController');
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/users", authenticateToken, userController.getAllUsers );
router.post('/login', userController.login);
router.post('/register', userController.register)
router.delete("/userDelete/:id", userController.deletion);


module.exports = router;