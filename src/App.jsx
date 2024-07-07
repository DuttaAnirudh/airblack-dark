import { Toaster } from "react-hot-toast";
import Admission from "./components/admission/Admission";
import AppInfo from "./components/appInfo/AppInfo";
import Courses from "./components/courses/Courses";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Instructors from "./components/instructors/Instructors";
import News from "./components/news/News";
import ImageCarousel from "./ui/ImageCarousel";

function App() {
  return (
    <>
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

      {/* TOAST MESSAGES */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "10px 15px",
            backgroundColor: "#280B45",
            color: "#FFE98A",
            border: "1px solid #CAC6DD",
          },
        }}
        reverseOrder={false}
      />
    </>
  );
}

export default App;
