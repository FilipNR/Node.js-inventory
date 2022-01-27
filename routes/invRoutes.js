const express = require('express');
const router = express.Router();
const {
    itemIndex,
    itemCreateGet,
    itemCreatePost,
    itemSingleGet,
    itemDelete
} = require('../controllers/invControllers')

router.get('/', itemIndex)


router.get('/item/create', itemCreateGet)

router.post('/item/create', itemCreatePost)

router.get('/item/:id', itemSingleGet)

router.delete('/item/:id', itemDelete)

module.exports = router;