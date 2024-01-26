module.exports = (sequelize, Sequelize) => {
    const CompanyProfile = sequelize.define("company_profile", {
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
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        whatsapp: {
            type: Sequelize.STRING
        },
        instagram: {
            type: Sequelize.STRING
        },
        facebook: {
            type: Sequelize.STRING
        },
        twitter: {
            type: Sequelize.STRING
        },

    });

    return CompanyProfile;
};