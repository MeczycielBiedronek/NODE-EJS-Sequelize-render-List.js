module.exports = function (sequelize, Sequelize) {

var Order = sequelize.define("order", {

    order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    order_type: {
        type: Sequelize.STRING,
    },
    transfer_type: {
        type: Sequelize.STRING,
    },
    link: {
        type: Sequelize.STRING,
    },
    completion_date: {
        type: Sequelize.DATE(6),
    },
    number_of_files: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    order_price: {
        type: Sequelize.INTEGER,
    },
    order_status: {
        type: Sequelize.STRING,
    },
    payment_status: {
        type: Sequelize.ENUM('yes', 'no'),
        defaultValue: 'no'
    },    
    invoice_link: {
        type: Sequelize.STRING,
    },
    order_description: {
        type: Sequelize.STRING,
    },
    output_file_format: {
        type: Sequelize.STRING,
    },
    clipping_options: {
        type: Sequelize.STRING,
    },
    additional_options_retouch: {
        type: Sequelize.ENUM('yes', 'no'),
            defaultValue: 'no'
    },
    additional_options_light_color: {
        type: Sequelize.ENUM('yes', 'no'),
            defaultValue: 'no'
    },
    additional_options_crop: {
        type: Sequelize.ENUM('yes', 'no'),
            defaultValue: 'no'
    },
    additional_options_shadow: {
        type: Sequelize.ENUM('yes', 'no'),
        defaultValue: 'no'
    },
    ready_package_link: {
        type: Sequelize.STRING,
    }

})

return Order;
}