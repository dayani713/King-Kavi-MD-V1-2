const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "A5510DKK#J1g1VIAAGp7bsaNsfUJjfOvBGdA3YDNz73HOYpU45Sk",
  MONGODB: process.env.MONGODB || "mongodb://mongo:PaBOeppDbwmJNYzFymkXJZvYgtAAOrqp@mainline.proxy.rlwy.net:32473",
  OWNER_NUM: process.env.OWNER_NUM || "94764040298",
};
