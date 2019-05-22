module.exports = (sequelize, DataTypes) => {
	const Skill = sequelize.define('Skill', {
		Name: DataTypes.STRING(50)
	});
	
	return Skill;
};