module.exports = () => {
  const data = {
    groups: [
      {
        id: 1,
        name: "default",
        description: "default",
        isDefault: true,
        userId: [1],
        applicationId: [1, 2],
      },
    ],
    applications: [
      {
        id: 1,
        name: "Permissioning",
      },
      {
        id: 2,
        name: "Support",
      },
      {
        id: 3,
        name: "LBR Dashboard",
      },
      {
        id: 4,
        name: "App X",
      },
      {
        id: 5,
        name: "App Y",
      },
      {
        id: 6,
        name: "App Z",
      },
    ],
    users: [
      {
        id: 1,
        firstName: "Hilel",
        surname: "Adams",
        email: "johebo@mailinator.com",
        isAdmin: true,
      },
    ],
  };
  return data;
};
