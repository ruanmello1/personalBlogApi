'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  async afterCreate(result, data) {
    axios.post('https://api.netlify.com/build_hooks/6367ff048c085d7ea7d87a94');
  },

  async afterUpdate(result, params, data) {
    axios.post('https://api.netlify.com/build_hooks/6367ff048c085d7ea7d87a94');
  }
};
