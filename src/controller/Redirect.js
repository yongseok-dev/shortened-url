const RedirectController = {
  get: (req, res, next) => {
    if (req.params.short !== "") {
      const data = {
        url: "https://github.com/yongseok-dev/" + req.params.short,
      };
      res.redirect(301, data.url);
    } else {
      next();
    }
  },
};

export default RedirectController;
