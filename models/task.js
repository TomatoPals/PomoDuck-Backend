// Creating our Task model
module.exports = function (sequelize, DataTypes) {
  const Task = sequelize.define(
    "Task",
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      taskName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estimatedPoms: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      pomSeconds: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      breakSeconds: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      isComplete: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
      },
      completeDate: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      freezeTableName: true // Model tableName will be the same as the model name
    }
  );
  return Task;
};
