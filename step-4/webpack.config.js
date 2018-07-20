const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
     alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
  
};
A

