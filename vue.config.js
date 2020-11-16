module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixin.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? `/counting-game/` : "/"
};
