module.exports = {
	development: {
		username: 'sa',
		password: 'yourStrong(!)Password',
		database: 'concierge',
		host: 'localhost:1433',
		dialect: 'mssql'
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'mssql',
		dialectOptions: {
			encrypt: true
		}
	}
};