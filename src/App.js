import HomeWrapper from "./components/home/HomeWrapper";

import DashboardStats from "./components/Dashboard/DashboardStats/DashboardStats";
import DashboardList from './components/Dashboard/DashboardList/DashboardList';

function App() {
  return (
    <HomeWrapper>
      <DashboardStats />
      <DashboardList/>
    </HomeWrapper>
  );
}

export default App;
