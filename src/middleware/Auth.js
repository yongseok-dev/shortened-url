import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyToken = (req, res, next) => {
  const { cookie } = req.headers;

  const token = cookie && cookie.replace("token=", "");
  req.user = null;
  if (token !== undefined) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (error) {
      // console.log(error);
    }
  }
  next();
};

export default verifyToken;
