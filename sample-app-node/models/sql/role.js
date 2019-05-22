module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define('Role', {
		Name: DataTypes.STRING(50)
	});

	Role.associate = function(models) {
		models.Role.belongsTo(models.User, {
			through: "UserRoles",
			foreignKey: "UserID"
		});
	};

	return Role;
};