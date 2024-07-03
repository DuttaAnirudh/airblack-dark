import Button from "../../ui/Button";
import Section from "../../ui/Section";

const Admission = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <h3 className="font-boska font-bold text-7xl text-color-1 tracking-wider">
          Admission Open
        </h3>
        <h4 className="font-extralight text-2xl text-n-2 text-center">
          Enrol today and embark on a transformative <br /> learning journey at
          Airblack Academy.
        </h4>
        <Button className={`bg-n-1  text-n-8`}>Apply Now</Button>
      </div>
    </Section>
  );
};

export default Admission;
