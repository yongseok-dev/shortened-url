const ErrorController = {
  get: (req, res, next) => {
    const data = { title: "tatus404", message: "Page Not Found" };
    return res.status(404).render("index", data);
  },
};

export default ErrorController;
