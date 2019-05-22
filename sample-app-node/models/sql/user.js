module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		Username: DataTypes.STRING(50),
		Email: DataTypes.STRING(50),
		Password: DataTypes.STRING(50),
		Status: DataTypes.INTEGER()
	});

	User.associate = function(models) {
		models.User.belongsToMany(models.Role, {
			through: "UserRoles",
			foreignKey: "RoleID"
		})
	}

  return User;
};