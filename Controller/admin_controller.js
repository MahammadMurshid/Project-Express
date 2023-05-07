const express = require('express');
const AdminSchema = require('../Model/Admin');


const GetAdmin = async (req, res) => {
    res.send('This is GetAdmin API')
}
const InsertAdmin = async (req, res) => {
    const { name, phone, email, address } = req.body;
    let admin = await AdminSchema.findOne({ email: email })
    if (admin) {
        return res.json({ succuss: false, Message: 'Email Already Exists' })
    }
    admin = new AdminSchema({ name: name, phone: phone, email: email, address: address })
    let savedAdmin = await admin.save()
    res.json({ succuss: true, savedAdmin })

}
const DeleteAdmin = async (req, res) => {
    res.send('This is DeleteAdmin API')
}
const UpdateAdmin = async (req, res) => {
    res.send('This is UpdateAdmin API')
}

module.exports = { GetAdmin, InsertAdmin, DeleteAdmin, UpdateAdmin }