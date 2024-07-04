import Admission from "./components/admission/Admission";
import AppInfo from "./components/appInfo/AppInfo";
import Courses from "./components/courses/Courses";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Instructors from "./components/instructors/Instructors";
import News from "./components/news/News";

function App() {
  return (
    <div className="max-w-[100rem] mx-auto">
      {/* MAIN */}
      <Header />
      <Hero />

      {/* STATS & FEATURED ON */}
      <Features />

      {/* SCHOOL COURSES */}
      <Courses />

      {/* SCHOOL COURSES */}
      <Instructors />

      {/* DOWNLOAD THE APP */}
      <AppInfo />

      {/* ADMISSION FORM */}
      <Admission />

      {/* LATEST NEWS */}
      <News />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
