import { useModal } from "../../context/ModalContext";
import Enroll from "./Enroll";
import LoginForm from "./LoginForm";

const menus = [
  "Beauty Club",
  "Culinary Club",
  "Studios",
  "Seminars",
  "Community",
  "About Us",
];

const Header = () => {
  const { openModal } = useModal();

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-n-8 flex items-center justify-between py-2 px-4 border-b-[1px] border-n-5">
        <div className="w-[7.5rem] ml-14">
          <img
            src="/logo.svg"
            className="w-full h-full cursor-pointer"
            alt="Airblack logo"
          />
        </div>
        <ul className="flex items-center gap-8 ">
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
