import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Landing;
