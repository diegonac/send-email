import dotenv from "dotenv";

dotenv.config();

const config = {
	env: process.env.NODE_ENV || "dev",
	port: process.env.PORT || 3000,
  ggMail: process.env.ggMail,
  ggKey: process.env.ggKey,
  myFrontend: process.env.myFrontend,
};

export { config };
