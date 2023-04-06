const MainController = {
  get: (req, res) => {
    const data = {
      title: "단축URL서비스",
      user: "yongseok",
      list: [
        {
          id: "id",
          url_short: "url_short",
          url_long: "url_long",
          count: "count",
          code: "code",
          explanation: "explanation",
          created_at: "created_at",
          updated_at: "updated_at",
        },
        {
          id: "id",
          url_short: "url_short",
          url_long: "url_long",
          count: "count",
          code: "code",
          explanation: "explanation",
          created_at: "created_at",
          updated_at: "updated_at",
        },
      ],
    };
    res.render("list", data);
  },
};

export default MainController;
