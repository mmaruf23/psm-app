import { useLocation } from "react-router";

const ArchiveContent = () => {
  const location = useLocation();

  return <div>Ini ArchiveContent : {location.pathname}</div>;
};

export default ArchiveContent;
