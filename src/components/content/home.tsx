import { useLocation } from 'react-router';

const Home = () => {
  const location = useLocation();

  return <div>Ini Home : {location.pathname}</div>;
};

export default Home;
