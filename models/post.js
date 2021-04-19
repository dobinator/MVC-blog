const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   reference: {
    //     model: 'user',
    //     key:'id'
    //   }

    // }
    body: DataTypes.TEXT,
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "post",
  }
);

module.exports = Post;
