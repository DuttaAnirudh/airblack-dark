import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Section from "../../ui/Section";

const newsBoxItems = [
  {
    imgSrc: "/videt-vaibhav.webp",
    heading:
      "Skilling Platform Airblack raises INR 33 Crores Led by the Michael & Susan Dell...",
    date: "09 Dec, 2023",
    link: "https://economictimes.indiatimes.com/tech/funding/online-skilling-platform-airblack-raises-rs-33-crore-in-funding-led-by-dell-foundation/articleshow/105844164.cms",
  },
  {
    imgSrc: "/forbesNewsroom.webp",
    heading:
      "Airblack has been recognized by Forbes India and D Globalist as part of Select 200...",
    date: "23 Nov, 2023",
    link: "https://www.forbesindia.com/ms/dgems-forbes/select200.html",
  },
  {
    imgSrc: "/newsGrid1.webp",
    heading:
      "Airblack, on a Mission to revamp the Future of Micro Entrepreneurship",
    date: "13 June, 2023",
    link: "https://www.entrepreneur.com/en-in/news-and-trends/airblack-on-a-mission-to-revamp-the-future-of-micro/429366",
  },
  {
    imgSrc: "/newsGrid2.webp",
    heading:
      "This startup is making Entrepreneurs Wing-it with ever-growing beauty",
    date: "27 May,  2023",
    link: "https://www.entrepreneur.com/en-in/entrepreneurs/this-startup-is-making-entrepreneurs-wing-it-with-its/378202",
  },
];

const News = () => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center gap-16 h-full">
        <h3 className="font-boska font-semibold text-7xl tracking-wider text-n-1">
          Latest News
        </h3>

        <div className="flex items-start justify-center gap-8 max-w-[80%] mx-auto">
          {newsBoxItems.map((item) => (
            <Card
              key={item.date}
              heading={item.heading}
              subHeading={item.date}
              btnText={"Read more"}
              imgSrc={item.imgSrc}
              link={item.link}
            />
          ))}
        </div>

        <Button className={`bg-color-1 `}>Airblack Newsroom</Button>
      </div>
    </Section>
  );
};

export default News;
