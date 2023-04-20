const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let accounts = require('../../Accounts');

//get all accounts
router.get('/', (req, res) => {
    res.json(account);
});

//get account by id
router.get('/:id', (req, res) => {
    const found = accounts.some((account) => account.id === parseInt(req.params.id));

    if (found) {
        res.json(accounts.filter(account => account.id === parseInt(req.params.id)));
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;
