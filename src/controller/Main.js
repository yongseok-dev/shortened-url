const MainController = {
  get: (req, res) => {
    const data = { title: "단축URL서비스", message: "단축URL 서비스입니다." };
    res.render("index", data);
  },
};

export default MainController;
