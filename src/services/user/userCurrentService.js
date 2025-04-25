import User from "../../db/model/Users.js";

export const findUserById = (userId) => User.findById(userId);
