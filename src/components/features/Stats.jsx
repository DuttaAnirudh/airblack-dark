import StatBox from "../../ui/StatBox";

const statistics = [
  { img: "/group.svg", stat: "35,000", tagline: "Student community" },
  {
    heading: "Students from over",
    stat: "300",
    tagline: "Cities across India & UAE",
  },
  { img: "/trustpilot.webp", stat: "4.8/5", tagline: "Rated by students" },
];

const Stats = () => {
  return (
    <div className="flex items-center justify-around">
      {statistics.map((statistic) => (
        <StatBox data={statistic} key={statistic.tagline} />
      ))}
    </div>
  );
};

export default Stats;
