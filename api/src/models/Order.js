const mongoose = require("mongoose");

module.exports = (sequelize) => {
    sequelize.define(
        "order",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
              },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            email_address: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                },
            },
            shipping_address: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            date: {
                type: DataTypes.STRING,
                allowNull: false
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false
            },
