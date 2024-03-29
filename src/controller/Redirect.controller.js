import URLModel from "../model/Url.model.js";

const RedirectController = {
  get: async (req, res, next) => {
    const urlShort = req.params.urlShort;
    if (urlShort.length !== 6) {
      next();
    }
    try {
      const [{ id, url_long }] = await URLModel.selectOne(urlShort);
      URLModel.visit(id);
      return res.redirect(301, decodeURIComponent(url_long));
    } catch (error) {
      next();
    }
  },
};

export default RedirectController;
