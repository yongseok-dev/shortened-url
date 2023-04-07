import URLModel from "../model/Url.model.js";
import { isValidUrl, escapeHtml } from "../util/inputValidation.js";

const URLController = {
  get: async (req, res) => {
    const userid = undefined;
    const data = {
      title: "단축URL서비스",
      type: "URL:get",
      message: "SUCCESS",
      user: "Yongseok",
    };
    const result = await URLModel.selectAll(userid);
    data["list"] = result.map((element) => {
      element["url_long"] = decodeURIComponent(element["url_long"]);
      return element;
    });
    return res.render("list", data);
  },
  post: async (req, res) => {
    const userid = undefined;
    const data = {
      title: "단축URL서비스",
      type: "URL:post",
      message: "SUCCESS",
    };
    if (!isValidUrl(req.body.url.trim())) {
      data["err"] = "URL_ERROR";
      data["message"] = "";
      return res.json(data);
    }
    const dto = {
      url_long: encodeURIComponent(req.body.url.trim()),
      explanation: escapeHtml(req.body.explanation.trim()),
    };
    if ((await URLModel.insert(dto, userid)) === undefined) {
      data["err"] = "SQLITE_ERROR";
      data["message"] = "";
      return res.json(data);
    }
    const result = await URLModel.selectAll(userid);
    data["list"] = result.map((element) => {
      element["url_long"] = decodeURIComponent(element["url_long"]);
      return element;
    });
    return res.json(data);
  },
  delete: async (req, res) => {
    const userid = undefined;
    const urlid = Number(req.body.id);
    const data = {
      title: "단축URL서비스",
      type: "URL:delete",
      message: "SUCCESS",
    };
    if ((await URLModel.delete(urlid, userid)) === undefined) {
      data["err"] = "SQLITE_ERROR";
      data["message"] = "";
    }
    const result = await URLModel.selectAll(userid);
    data["list"] = result.map((element) => {
      element["url_long"] = decodeURIComponent(element["url_long"]);
      return element;
    });
    return res.json(data);
  },
  put: (req, res) => {
    const data = {
      title: "단축URL서비스",
      type: "URL:put",
      message: "SUCCESS",
    };
    return res.json(data);
  },
};

export default URLController;
