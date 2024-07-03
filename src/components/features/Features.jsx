import Section from "../../ui/Section";
import SeenOn from "./SeenOn";
import Stats from "./Stats";

const Features = () => {
  return (
    <Section>
      <div className="flex flex-col justify-center gap-[10rem] h-full ">
        <Stats />
        <SeenOn />
      </div>
    </Section>
  );
};

export default Features;
