import URLModel from "../model/Url.model.js";
const URLController = {
  get: async (req, res) => {
    const data = {
      title: "단축URL서비스",
      user: "yongseok",
    };
    data["list"] = await URLModel.selectAll(undefined);
    res.render("list", data);
  },
  post: (req, res) => {
    console.log(req.body);
    const userid = 1;
    const data = {
      url_long: req.body.url,
      explanation: req.body.explanation,
      title: "단축URL서비스",
      list: {
        id: "id",
        url_short: "url_short",
        url_long: "url_long",
        count: "count",
        code: "code",
        explanation: "explanation",
        created_at: "created_at",
        updated_at: "updated_at",
      },
    };
    URLModel.insert(data, userid);
    res.json(data);
  },
  delete: (req, res) => {
    const data = { title: "단축URL서비스", message: "단축URL 서비스입니다." };
    res.json(data);
  },
  put: (req, res) => {
    const data = { title: "단축URL서비스", message: "단축URL 서비스입니다." };
    res.json(data);
  },
};

export default URLController;
