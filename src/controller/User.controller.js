const UserController = {
  redirect: (req, res) => {},
  get: (req, res) => {},
  post: (req, res) => {
    const data = { title: "단축URL서비스", message: "단축URL 서비스입니다." };
    return res.json(data);
  },
};

export default UserController;
