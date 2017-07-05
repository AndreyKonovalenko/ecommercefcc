const Sequelize = require('sequelize')
const sequelize = require('../db')

const Post = sequelize.define('post', {
    Title: {
        type: Sequelize.STRING
    },
    Article: {
        type: Sequelize.TEXT
    },
    Archived: {
        type: Sequelize.BOOLEAN
    },
    Cover: {
        type: Sequelize.STRING
    },
    Published_at: {
        type: Sequelize.DATE
    },
    Permalink: {
        type: Sequelize.STRING
    }
})

// force: true will drop the table if it already exists
User.sync({ force: true }).then(() => {
  // Table created
    return [
        User.create({ Title: 'post 1', Article: 'Come help us finish up the release! 1' }),
        User.create({ Title: 'post 2', Article: 'Come help us finish up the release! 2' }),
        User.create({ Title: 'post 3', Article: 'Come help us finish up the release! 3' }),
        User.create({ Title: 'post 4', Article: 'Come help us finish up the release! 4' })
    ]
})

module.exports = Post
