import jwt from  "jsonwebtoken";
import config from "../config/config.json" assert { type: "json" };



export const checkJwtToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized User",
    });
  }

  jwt.verify(token, config.development.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Unauthorized User",
      });
    }
    req.user = decoded;
    next();
  });
};

export const getFileUrl = (file) => {
  if (file?.filename) {
    return `${config.development.URL}:${config.development.PORT}/documents/${file?.filename}`;
  }
};
export const getImageUrl = (file) => {
  if (file?.filename) {
    return `${config.development.URL}:${config.development.PORT}/images/${file?.filename}`;
  }
};
