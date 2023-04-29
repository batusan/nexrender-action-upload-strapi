// index.js
module.exports = (job, settings, action, type) => {
    console.log('hello from my module: ' + action.module);
    return Promise.resolve();
}