import Session from '../db/model/Session.js';

export const logoutUser = async (accessToken) => {
  if (!accessToken) {
    return;
  }
  await Session.deleteOne({ accessToken });
};
