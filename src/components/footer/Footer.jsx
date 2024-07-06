import { socialData, footerItemTop, footerItemBottom } from "../../lib/data";

const Footer = () => {
  return (
    <div className="bg-color-4 pt-10 pb-4">
      <div className="flex items-start justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="w-[7.5rem]">
          <img className="w-full h-full" src="/logo.svg" alt="Airblack Logo" />
        </div>

        {/* Info */}
        <div className="flex flex-col items-center justify-between gap-3">
          {/* Footer Top */}
          <div className="flex items-center gap-8 mb-5 ">
            {footerItemTop.map((item) => (
              <a
                href="#"
                className="uppercase font-extralight text-n-2"
                key={item}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-n-13">
            &copy; Airblack Ltd {new Date().getFullYear()}
          </p>

          {/* Footer Bottom */}
          <div className="flex items-center gap-8">
            {footerItemBottom.map((item) => (
              <a href="#" className="font-extralight text-n-2" key={item}>
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          {socialData.map((item) => (
            <div className="w-[2rem]" key={item.name}>
              <a href={item.link} target="_blank">
                <img
                  className="w-full h-full"
                  src={item.imgSrc}
                  alt={`${item.name} logo`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
