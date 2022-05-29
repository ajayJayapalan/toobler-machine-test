import activeUsersIcon from "../../assets/dashboard-stats-assets/active-user.png";
import maleIcon from "../../assets/dashboard-stats-assets/male-user.png";
import femaleIcon from "../../assets/dashboard-stats-assets/female-user.png";
import usersIcon from "../../assets/dashboard-stats-assets/users.png";

export const getUserTileIcon = (id) => {
  switch (id) {
    case 1:
      return usersIcon;
    case 2:
      return maleIcon;
    case 3:
      return femaleIcon;
    case 4:
      return activeUsersIcon;

    default:
      return null;
  }
};
