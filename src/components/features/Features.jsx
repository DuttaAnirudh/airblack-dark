import Section from "../../ui/Section";
import SeenOn from "./SeenOn";
import Stats from "./Stats";

const Features = () => {
  return (
    <Section>
      <div className="flex flex-col justify-center gap-[10rem] pt-6 lg:pt-6">
        <Stats />
        <SeenOn />
      </div>
    </Section>
  );
};

export default Features;
