// index.js
module.exports = (job, settings, action, type) => {
  console.log("hello from my action: " + action);
  console.log("job : ", job);
  console.log("settings", settings);
  console.log("type : ", type);
  return Promise.resolve();
};
