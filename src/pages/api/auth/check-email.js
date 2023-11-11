// pages/api/auth/check-email.js
import dbConnect from "../../../../src/db/db";
import User from "../../../../src/models/user.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const { email } = req.body;
      const user = await User.findOne({ email });

      if (user) {
        return res.status(200).json({ exists: true });
      } else {
        return res.status(200).json({ exists: false });
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
