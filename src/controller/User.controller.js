import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// JWT 시크릿 키
const JWT_SECRET = process.env.JWT_SECRET;

// GitHub OAuth 인증 정보
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const UserController = {
  info: (req, res) => {
    try {
      if (req.user !== null) {
        return res.json(true);
      } else {
        return res.json(false);
      }
    } catch (error) {}
  },
  login: (req, res) => {
    const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
    return res.redirect(redirectUrl);
  },
  logout: (req, res) => {
    res.cookie("token", "", { httpOnly: true });
    return res.json(true);
  },
  callback: async (req, res, next) => {
    const { code } = req.query;
    // 액세스 토큰을 발급.
    const tokenRes = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        }),
      }
    );
    const { access_token } = await tokenRes.json();

    // 사용자 정보를 조회
    const userRes = await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const userData = await userRes.json();
    const { id, login } = userData;

    // JWT 토큰에 저장
    const payload = {
      userId: id,
      userName: login,
    };

    // JWT 토큰 생성
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    // JWT 토큰 쿠키에 담기
    res.cookie("token", token, { httpOnly: true });
    const data = {
      title: "단축URL서비스",
      type: "URL:get",
      message: "GitHub OAuth 정보를 받아 옵니다.",
      user: login,
    };
    return res.render("index", data);
  },
};
export default UserController;
