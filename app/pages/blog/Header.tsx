// Import the link props
import Link from "next/link";

// add the React Header Element
const Header: React.FC = () => {
  return (
    // header value
    <header className="py-2">
      <Link className="text-2xl font-bold text-green-500" href="/">
        My Simple Blog App
      </Link>
    </header>
  );
};

// export Header module
export default Header;
