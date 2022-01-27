const express = require('express');
const Item = require('../models/item');

const itemIndex = (req, res) => {
    Item.find({}).sort({createdAt: 'desc'}).exec()
        .then((result) => {
            res.render('index', {item: result, title: 'Items'})
        })
        .catch((err) => console.log(err))
}

const itemCreateGet = (req, res) => {
    res.render('create', {title: 'Create'})
}

const itemCreatePost = (req, res) => {
    const {name, description, price, linkUrl} = req.body;
    console.log(req.body)
    const item = new Item({name, description, price, linkUrl})
    item.save()
    .then(res.redirect('/'))
    .catch((err) => console.log(err))
}

const itemSingleGet = (req, res) => {
    const id = req.params.id
    Item.findById(id)
        .then((result) => {
            res.render('item', {item: result, title: Item.name})
        })
        .catch((err) => console.log(err))
}

const itemDelete = (req, res) => {
    const id = req.params.id;
    Item.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/'})
        })
        .catch(err => console.log(err))
}

module.exports = {
    itemIndex,
    itemCreateGet,
    itemCreatePost,
    itemSingleGet,
    itemDelete
}