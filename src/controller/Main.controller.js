import URLModel from "../model/Url.model.js";

const MainController = {
  get: async (req, res) => {
    const data = {
      title: "단축URL서비스",
      user: "yongseok",
    };
    data["list"] = await URLModel.selectAll(undefined);
    res.render("list", data);
  },
};

export default MainController;
