import Section from "../../ui/Section";

const AppInfo = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-start gap-16">
        <h3 className="font-boska text-7xl font-bold tracking-widest text-center">
          Seamless learning through the <br /> Airblack app
        </h3>

        <div className="w-[60%]">
          <img
            className="w-full h-full"
            src="/appWeb.webp"
            alt="Mobile App UI"
          />
        </div>
      </div>
    </Section>
  );
};

export default AppInfo;
