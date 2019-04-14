const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login',
    [
        check('email')
            .isEmail()
            .withMessage("Please Enter a valid Email")
            .custom((value, { req }) => {
                return User.findOne({ email: value })
                    .then(user => {
                        if (!user) {
                            return Promise.reject('Email Dose not exist');
                        }
                    })
            })
            .normalizeEmail(),

        body('password', 'Please enter the password with 5 character and it should be alphanumeric')
            .isLength({ min: 5 })
            .isAlphanumeric()
            .trim()
    ],
    authController.postLogin);

router.post('/signup',
    [
        check('email')
            .isEmail()
            .withMessage("Please enter a valid email")
            .custom((value, { req }) => {
                return User.findOne({ email: value })
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject('E-mail exists already, please pick different one.');
                        }
                    });
            })
            .normalizeEmail(),

        body('password', 'Please enter the password with 5 character and it should be alphanumeric')
            .isLength({ min: 5 })
            .isAlphanumeric()
            .trim(),

        body('confirmPassword')
            .trim()
            .custom((value, { req }) => {
                if (value !== (req.body.password)) {
                    throw new Error("Password have to match!");
                }
                return true;
            })
    ],
    authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;