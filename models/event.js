module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    string: DataTypes.STRING
  })

  return Event
}
