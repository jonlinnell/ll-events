module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    eventType: DataTypes.STRING,
    speaker: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    onCampus: DataTypes.INTEGER,
    dateStart: DataTypes.DATE,
    dateEnd: DataTypes.DATE,
    url: DataTypes.STRING
  })

  return Event
}
