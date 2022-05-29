import RootProvider from "./components/home/RootProvider";

import DashboardStats from "./components/Dashboard/DashboardStats/DashboardStats";
import DashboardList from "./components/Dashboard/DashboardList/DashboardList";
import DashboardUserForm from "./components/Dashboard/DashboardUserForm/DashboardUserForm";
import HomeWrapper from "./components/home/HomeWrapper";

function App() {
  return (
    <RootProvider>
      <HomeWrapper>
        <DashboardStats />
        <DashboardList />
      </HomeWrapper>
      <DashboardUserForm />
    </RootProvider>
  );
}

export default App;
