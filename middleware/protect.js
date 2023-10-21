import jwt from "jsonwebtoken";
import envHandler from "../helpers/envHandler.js";
import catchAsync from "../helpers/catchAsync.js";

export const protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    token = req.headers.authorization.split(" ")[1];

  if (!token)
    return res
      .status(400)
      .json({ error: "Session expired. Login again", verified: false });

  // const decoded = await jwtVerifyPromise(token, envHandler("JWT_SECRET")).catch(
  let decoded;
  try {
    decoded = await jwt.verify(token, envHandler("JWT_SECRET"));
  } catch (err) {
    return res.status(400).json({ error: "Session expired. Login again" });
  }
  req.userID = decoded.id;

  next();
});
