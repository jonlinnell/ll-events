module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    astring: DataTypes.STRING,
  });

  return Event;
};
