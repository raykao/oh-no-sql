module.exports = (sequelize, DataTypes) => {
	const Job = sequelize.define('Job', {
		JobPostingID: {
			type: DataTypes.STRING(50),
			primaryKey: true
		},
		JobTitle: DataTypes.STRING(50),
		JobDescription: DataTypes.STRING(50),		
		IsActive: DataTypes.BOOLEAN()
	},
	{
		tableName: "JobPostings"
	});

	Job.associate = function(models) {
		models.Job.belongsTo(models.Company, {
			foreignKey: "CompanyID",
			sourceKey: "Id"
		});
	};

	return Job;
};