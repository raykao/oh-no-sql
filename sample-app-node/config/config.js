module.exports = {
	development: {
		username: 'winston',
		password: 'Parabellum~',
		database: 'concierge',
		encrypt: true,
		host: 'thecontinental.database.windows.net',
		dialect: 'mssql',
		define: {
			timestamps: true,
			createdAt: "CreatedOnDate",
			updatedAt: false
		  },
		dialectOptions: {
			options: {
				encrypt: true
			}
		}
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'mssql',
		define: {
			timestamps: true,
			createdAt: "CreatedOnDate",
			updatedAt: false
		  },
		dialectOptions: {
			options: {
				encrypt: true
			}
		},
		dialectOptions: {
			options: {encrypt: true}
		}
	}
};