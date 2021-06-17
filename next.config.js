const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    prependData: '@import "vars"; @import "mixins"; @import "utils";',
    includePaths: [path.join(__dirname, "styles")]
  }
};
