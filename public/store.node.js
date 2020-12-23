const Store = require('electron-store');

const initializeStore = () => {
  const store = new Store();
  store.set('unicorn', '🦄');

  return store;
}

module.exports = {
  initializeStore
}
