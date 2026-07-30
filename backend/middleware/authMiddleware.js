import jwt from "jsonwebtoken";

console.log("VERIFY SECRET:", process.env.JWT_SECRET);
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    console.log("Received Token:", token);
console.log("JWT Secret:", process.env.JWT_SECRET);

const decoded = jwt.verify(token, process.env.JWT_SECRET);
console.log("Decoded User:", decoded);
console.log("Decoded:", decoded);

    req.user = decoded;
    console.log("req.user =", req.user);
    next();
  } catch (error) {
  console.error("UPDATE ERROR:", error);

  res.status(500).json({
    success: false,
    message: error.message,
    sqlMessage: error.sqlMessage,
    code: error.code,
  });
}
};