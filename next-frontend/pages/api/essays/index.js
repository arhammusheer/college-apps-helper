import jwt from "next-auth/jwt";
const secret = process.env.JWT_SECRET;

export default async (req, res) => {
  const token = await jwt.getToken({ req, secret });

  if (token) {
    // Signed in
    res.json({
      status: "success",
      data: [{ title: "My Essay 1", description: "Essay for Princeton" }],
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
