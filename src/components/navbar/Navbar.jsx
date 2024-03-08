import NavbarLeft from "./navbaritem/NavbarLeft";
import NavbarRight from "./navbaritem/NavbarRight";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
