module.exports = (sequelize, Sequelize) => {
    const progress = sequelize.define("progress", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        percent: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },

    });

    return progress;
};