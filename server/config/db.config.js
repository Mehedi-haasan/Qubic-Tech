const config = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Ceevit250",
    DB: "qubic_tech",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = config;