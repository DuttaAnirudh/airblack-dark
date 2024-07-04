import CardXL from "../../ui/CardXL";

const courses = [
  {
    title: "Certified Beauty Professional",
    desc: " Learn Makeup, Hairstyling, Nail Art and many more courses from India&apos;s leading beauty experts and professionals",
    imgSrc: "/beautyClub.webp",
    logoImgSrc: "/beautyClubLogo.webp",
  },
  {
    title: "Certified Baking Professional",
    desc: "Transform yourself into a baking professional by learning from India&apos;s top culinary experts and professionals",
    imgSrc: "/culinaryClub.webp",
    logoImgSrc: "/culinaryClubLogo.webp",
  },
];

const Courses = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="font-boska font-semibold tracking-wider text-7xl text-color-2 ">
        Our School
      </h2>
      <p className="font-extralight text-2xl text-n-2 max-w-[80rem] text-center mb-8">
        Airblack Academy&apos;s specialized divisions offer a broad spectrum of
        essential skills, enabling individuals to achieve meaningful lives and
        livelihoods through focused learning
      </p>
      <div className="flex items-center justify-center gap-24">
        {courses.map((item) => (
          <CardXL
            key={item.title}
            mainImg={item.imgSrc}
            logoImg={item.logoImgSrc}
            title={item.title}
            desc={item.desc}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
