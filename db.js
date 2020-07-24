const { v4: uuid } = require("uuid");

const userId = uuid();
const appId1 = uuid();
const appId2 = uuid();

module.exports = () => {
  const data = {
    groups: [
      {
        id: uuid(),
        name: "default",
        description: "default",
        isDefault: true,
        userId: [userId],
        applicationId: [appId1, appId2],
        createdAt: Date.now(),
      },
    ],
    applications: [
      {
        id: appId1,
        name: "Permissioning",
        createdAt: Date.now(),
      },
      {
        id: appId2,
        name: "Support",
        createdAt: Date.now(),
      },
      {
        id: uuid(),
        name: "LBR Dashboard",
        createdAt: Date.now(),
      },
      {
        id: uuid(),
        name: "App X",
        createdAt: Date.now(),
      },
      {
        id: uuid(),
        name: "App Y",
        createdAt: Date.now(),
      },
      {
        id: uuid(),
        name: "App Z",
        createdAt: Date.now(),
      },
    ],
    users: [
      {
        id: userId,
        firstName: "Hilel",
        surname: "Adams",
        email: "johebo@mailinator.com",
        isAdmin: true,
        createdAt: Date.now(),
      },
    ],
  };
  return data;
};
