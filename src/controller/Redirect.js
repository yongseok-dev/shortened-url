const RedirectController = {
  get: (req, res, next) => {
    const data = { url: "https://github.com/yongseok-dev" };
    res.redirect(301, data.url);
  },
};

export default RedirectController;
