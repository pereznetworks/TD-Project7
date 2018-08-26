// importing json data

const portfolio = {
  projects: require('./data.json').projects,
  profile: require('./profile.json').profile
}

module.exports = portfolio;
