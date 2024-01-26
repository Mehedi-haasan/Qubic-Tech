module.exports = (sequelize, Sequelize) => {
    const employee = sequelize.define("employee", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        name: {
            type: Sequelize.STRING
        },
        image_url: {
            type: Sequelize.TEXT
        },
        details: {
            type: Sequelize.STRING
        }
    });

    return employee;
};
