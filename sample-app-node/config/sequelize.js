// const Sequelize = require('sequelize');
// const env       = process.env.NODE_ENV || 'development';
// const config    = require('./config')[env];

// // if (config.use_env_variable) {
// //   const sequelize = new Sequelize(process.env[config.use_env_variable], config);
// // } else {
// //   const sequelize = new Sequelize(config.database, config.username, config.password, config);
// // }
// const sequelize = new Sequelize(config.database, config.username, config.password, config);

// sequelize.authenticate()
// 	.then(()=>{
// 		console.log('SQL DB Connection has been established successfully.');
// 	})
// 	.catch((err)=>{
// 		console.error('Unable to connect to the database:', err);
// 	})

// module.exports  = sequelize;