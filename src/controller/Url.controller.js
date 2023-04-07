import URLModel from "../model/Url.model.js";
import { isValidUrl, escapeHtml } from "../util/inputValidation.js";

const URLController = {
  get: async (req, res) => {
    const userid = undefined;
    const data = {
      title: "단축URL서비스",
      type: "URL:get",
      message: "SUCCESS",
    };
    const result = await URLModel.selectAll(userid);
    data["list"] = result.map((element) => {
      element["url_long"] = decodeURIComponent(element["url_long"]);
      return element;
    });
    res.render("list", data);
  },
  post: async (req, res) => {
    const userid = undefined;
    const data = {
      title: "단축URL서비스",
      type: "URL:post",
      message: "SUCCESS",
    };
    if (!isValidUrl(req.body.url)) {
      data["message"] = "URL_ERROR";
    }
    const dto = {
      url_long: encodeURIComponent(req.body.url),
      explanation: escapeHtml(req.body.explanation),
    };
    if ((await URLModel.insert(dto, userid)) === undefined) {
      data["message"] = "SQLITE_ERROR";
    }
    const result = await URLModel.selectAll(userid);
    data["list"] = result.map((element) => {
      element["url_long"] = decodeURIComponent(element["url_long"]);
      return element;
    });
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
