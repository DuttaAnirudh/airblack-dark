import { useModal } from "../../context/ModalContext";
import Enroll from "./Enroll";
import LoginForm from "./LoginForm";
import { headerMenus as menus } from "../../lib/data";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const { openModal } = useModal();

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-n-8 flex items-center justify-between py-2 pl-4 lg:pl-0 lg:px-4 border-b-[1px] border-n-5">
        <div className="w-[7.5rem] lg:ml-14">
          <img
            src="/logo.svg"
            className="w-full h-full cursor-pointer"
            alt="Airblack logo"
          />
        </div>
        <div className="flex items-center justify-center lg:hidden w-[2rem] border-[1px] border-n-2 hover:border-n-1 rounded-lg px-8 py-2 cursor-pointer mr-4">
          <p className="text-n-1 text-2xl">
            <HiOutlineMenu />
          </p>
        </div>
        <ul className="hidden lg:flex items-center gap-8 ">
          {menus.map((item) => (
            <a
              href="#"
              className="text-sm font-medium text-n-2 hover:text-n-1 cursor-pointer"
              key={item}
            >
              {item}
            </a>
          ))}
          <a
            onClick={() => openModal(LoginForm)}
            className="text-sm font-medium text-n-2 hover:text-n-1 cursor-pointer"
          >
            Member Login
          </a>
        </ul>
      </header>

      {/* CTA */}
      <Enroll />
    </div>
  );
};

export default Header;
