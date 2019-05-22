module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    Name: DataTypes.STRING(50),
    City: DataTypes.STRING(50),
    State: DataTypes.STRING(50),
    IsActive: DataTypes.BOOLEAN
  });

  Company.associate = (models) => {
    models.Company.hasMany(models.Job, {
      foreignKey: "CompanyID"
    })
  }

  return Company;
};