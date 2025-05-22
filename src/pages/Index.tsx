
import { Navigate } from "react-router-dom";

// This component redirects from the default index route to our home page
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
