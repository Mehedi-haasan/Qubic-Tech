module.exports = (sequelize, Sequelize) => {
    const work = sequelize.define("work", {
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
    });

    return work;
};
