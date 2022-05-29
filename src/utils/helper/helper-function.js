export const isEmailValid = (email) => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const generateStats = (a = 0, b = 0, c = 0, d = 0) => {
  return [
    {
      id: 1,
      text: "Total Users",
      count: `${a} people`,
    },
    {
      id: 2,
      text: "Total Males",
      count: `${b} males`,
    },
    {
      id: 3,
      text: "Total Females",
      count: `${c} females`,
    },
    {
      id: 4,
      text: "Total Active",
      count: `${d} people`,
    },
  ];
};

export const buildStats = ({ data, isFemale, isActive, isAddNew }) => {
  let users = Number(data[0].count.split(" ")[0]);
  let males = Number(data[1].count.split(" ")[0]);
  let females = Number(data[2].count.split(" ")[0]);
  let active = Number(data[3].count.split(" ")[0]);

  if (isAddNew) {
    users++;
    if (isFemale) {
      females++;
    } else {
      males++;
    }
    if (isActive) {
      active++;
    }
  } else {
    users--;
    if (isFemale) {
      females--;
    } else {
      males--;
    }
    if (isActive) {
      active--;
    }
  }

  return generateStats(users, males, females, active);
};
