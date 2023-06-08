const config = {
    db: {
        development: {
            database: "loginserver",
            username: "root",
            password: "doe07049",
            host: "127.0.0.1",
            port: "3306",
            dialect: "mysql",
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
        test: {
            database: "loginserver_test",
            username: "root",
            password: "doe07049",
            host: "127.0.0.1",
            port: "3306",
            dialect: "mysql",
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
    },
}

module.exports = config
