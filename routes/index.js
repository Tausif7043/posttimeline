module.exports = function(app) {
    app.use('/api/auth', require('./auth.js'));
    app.use('/api/post', require('./post.js'));
}