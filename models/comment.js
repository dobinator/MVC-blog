const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false, 
    }

  // id: {
  //  type: DataTypes.INTEGER,
  //  allowNull: false, 
  //  primaryKey: true,
  //  autoIncrement: true
  // },
  //  comment_name: {
  //   type: DataTypes.STRING,
  //   allowNull:false
  //  },
  //  user_id:{
  // type: DataTypes.INTEGER,
  // allowNull: false,
  // references: {
  //   model: 'User',
  //   key:'id',
  // },
  // post_id: {
  // type: DataTypes.INTEGER,
  // allowNull: false,
  // references: {
  //   model: 'post',
  //   key: 'id'
  // }
  // },

  //  },
  },
  {
    sequelize,
    
    // freezeTableName: true,
    // underscored: true,
    // modelName: 'comment',
  }
);


module.exports = Comment;