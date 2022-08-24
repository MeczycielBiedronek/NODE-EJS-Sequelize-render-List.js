module.exports = function (sequelize, Sequelize) {

var Order = sequelize.define("order", {

    order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
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
        // allowNull: false
    },
    order_price: {
        type: Sequelize.INTEGER,
    },
    order_status: {
        type: Sequelize.STRING,
    },
    payment_status: {
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
        type: Sequelize.STRING,
    },
    additional_options_light_color: {
        type: Sequelize.STRING,
    },
    additional_options_crop: {
        type: Sequelize.STRING,
    },
    additional_options_shadow: {
        type: Sequelize.STRING,
    },
    ready_package_link: {
        type: Sequelize.STRING,
    }

})

return Order;
}