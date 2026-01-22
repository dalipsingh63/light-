import { BrowserRouter as Router } from "react-router-dom";
import UserRoutes from "./pages/routes/UserRoutes";
import AdminRoutes from "./pages/routes/AdminRoutes";
//  whatsp ican 
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);




const App = () => {
  return (
    <Router>
      {/* User side routes */}
      <UserRoutes />

      {/* Admin side routes */}
      <AdminRoutes />
    </Router>
  );
};

export default App;
