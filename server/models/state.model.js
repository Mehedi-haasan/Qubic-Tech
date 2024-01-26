module.exports = (sequelize, Sequelize) => {
    const state = sequelize.define("state", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        year: {
            type: Sequelize.INTEGER
        },
        customer: {
            type: Sequelize.INTEGER
        },
        project: {
            type: Sequelize.INTEGER
        },
        awards: {
            type: Sequelize.INTEGER
        },
    });

    return state;
};