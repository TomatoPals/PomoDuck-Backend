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
      completedPoms: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0
      },
      completedSmallBreak: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0
      },
      completedBigBreak: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0
      },
      isComplete: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0
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
