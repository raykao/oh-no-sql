'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    Id: {type: DataTypes.STRING(50), unique: 'compositeIndex' },
    Name: DataTypes.STRING(50),
    City: DataTypes.STRING(50),
    State: DataTypes.STRING(50),
    IsActive: DataTypes.BOOLEAN(),
    CreatedOnDate: DataTypes.Date()
  });

  return Company;
};