export default (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    textNews: {
      type: DataTypes.TEXT,
      allowNull: false,
      get(value) {
        return JSON.parse(this.getDataValue(value));
      },
      set(value) {
        this.setDataValue('new news', JSON.stringify(value));
      }
    },
    
  });

  return News;
};
