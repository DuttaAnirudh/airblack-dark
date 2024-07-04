import Card from "../../ui/Card";

const instructorDetails = [
  {
    name: "Aanchal Kapoor",
    desc: "Internationally Trained Professional MUA",
    imgSrc: "/Expert2.webp",
    category: "beauty",
    link: "",
  },
  {
    name: "Katelyn Nazareth",
    desc: "Professionally trained Makeup Artist and Hairstylist",
    imgSrc: "/Expert3.webp",
    category: "beauty",
    link: "",
  },
  {
    name: "Shraddha Naik",
    desc: "Bollywood Celebrity MUA, Shraddha Kapoor's Go-To Artist",
    imgSrc: "/Expert4.webp",
    category: "guest",
    link: "",
  },
  {
    name: "Eram Malim",
    desc: "Internationally Trained Hair and Makeup Artist",
    imgSrc: "/Expert5.webp",
    category: "beauty",
    link: "",
  },
  {
    name: "Ningla Dheer",
    desc: "Internationally certified MUA from Mozambique",
    imgSrc: "/Expert6.webp",
    category: "beauty",
    link: "",
  },
  {
    name: "Franky",
    desc: "Professional Creative and Glam Makeup Artist and Content Creator",
    imgSrc: "/Expert7.webp",
    category: "beauty",
    link: "",
  },
  {
    name: "Shaan Mu",
    desc: "Bollywood Celebrity MUA, Jacqueline's Go-To MUA",
    imgSrc: "/Expert8.webp",
    category: "guest",
    link: "",
  },
  {
    name: "Sylvie Saini",
    desc: "Professional Baker and Pastery Chef",
    imgSrc: "/Expert9.webp",
    category: "culinary",
    link: "",
  },
  {
    name: "Amit Vohra",
    desc: "Seasoned Chef, an Academician, and an Author of 2 culinary books",
    imgSrc: "/Expert10.webp",
    category: "culinary",
    link: "",
  },
  {
    name: "Harshita Aggarwal",
    desc: "Professional Baker and Masterchef Contestant",
    imgSrc: "/Expert11.webp",
    category: "culinary",
    link: "",
  },
  {
    name: "Neha Deepak Shah",
    desc: "Celebrity Chef and MasterChef India Season 4 Contestant",
    imgSrc: "/Expert12.webp",
    category: "guest",
    link: "",
  },
];

const Instructors = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-[14rem]">
      <h3 className="font-boska text-7xl font-bold tracking-widest text-center">
        India&apos;s Top Experts
      </h3>
      <p className="font-extralight text-2xl text-n-2 max-w-[80rem] text-center mb-8">
        Learn directly from industry leaders who bring a wealth of knowledge{" "}
        <br /> and real-world experience
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_18rem))] gap-x-[4rem] gap-y-12 max-w-[87rem]">
        {instructorDetails.map((item) => (
          <Card
            key={item.name}
            heading={item.name}
            subHeading={item.desc}
            btnText="Learn more"
            imgSrc={item.imgSrc}
            category={item.category}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
