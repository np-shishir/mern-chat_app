import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  //generate token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  //send token as cookies
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //7d to milisec
    httpOnly: true, //prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", //CSRF attacks
    secure: process.env.NODE_ENV !== "development", //http or https
  });
  return token;
};
