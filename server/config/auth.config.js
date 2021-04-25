require("dotenv").config();
const {APP_SECRET } = process.env;
export default { secret: APP_SECRET };