import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <Link to={"/"} className=" flex text-5xl">
      <img
        className="rounded-full h-[200px] w-[250px]"
        src="/Online Shop Logo.jpg"
        alt=""
      />
    </Link>
  );
};

export default NavbarLeft;
