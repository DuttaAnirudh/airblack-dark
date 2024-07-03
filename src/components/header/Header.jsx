import Enroll from "./Enroll";

const menus = [
  "Beauty Club",
  "Culinary Club",
  "Studios",
  "Seminars",
  "Community",
  "About Us",
  "Member Login",
];

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <header className="bg-n-8 flex items-center justify-between py-2 px-4 border-b-[1px] border-n-5">
        <div className="w-[7.5rem] ml-8">
          <img src="/logo.svg" className="w-full h-full" alt="Airblack logo" />
        </div>
        <ul className="flex items-center gap-8 ">
          {menus.map((item) => (
            <li
              className="text-sm font-medium text-n-2 hover:text-n-1 cursor-pointer"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </header>

      {/* CTA */}
      <Enroll />
    </div>
  );
};

export default Header;
