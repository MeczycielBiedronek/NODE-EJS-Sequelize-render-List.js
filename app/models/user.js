module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firs_last_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        comp_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        address_line1: {
            type: Sequelize.TEXT
        },

        address_line2: {
            type: Sequelize.TEXT
        },

        address_line3: {
            type: Sequelize.TEXT
        },

        tex_number: {
            type: Sequelize.TEXT
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }


    });

    return User;

}