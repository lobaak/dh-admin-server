module.exports = () => {
  const data = {
    groups: [
      {
        id: 1,
        name: "default",
        description: "default",
        isDefault: true,
        userId: [],
        applicationId: [],
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
    users: [],
  };
  return data;
};
