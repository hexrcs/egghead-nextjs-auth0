import { NextApiHandler } from "next";
import auth0 from "../../lib/auth0";

const callback: NextApiHandler = async (req, res) => {
  try {
    await auth0.handleCallback(req, res, { redirectTo: "/secret" });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
};

export default callback;
