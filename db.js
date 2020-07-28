const { v4: uuid } = require("uuid");

const userId = uuid();
const appId1 = uuid();
const appId2 = uuid();
const type = uuid();

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
      },
      {
        id: appId2,
        name: "Support",
      },
      {
        id: uuid(),
        name: "LBR Dashboard",
      },
      {
        id: uuid(),
        name: "App X",
      },
      {
        id: uuid(),
        name: "App Y",
      },
      {
        id: uuid(),
        name: "App Z",
      },
    ],
    users: [
      {
        id: userId,
        firstName: "Hilel",
        surname: "Adams",
        email: "johebo@mailinator.com",
        createdAt: Date.now(),
        userTypeId: type,
      },
    ],
    userTypes: [
      {
        id: type,
        name: "Admin",
      },
      {
        id: uuid(),
        name: "Default",
      },
    ],
  };
  return data;
};
