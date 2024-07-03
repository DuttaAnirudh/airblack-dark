import Admission from "./components/admission/Admission";
import AppInfo from "./components/appInfo/AppInfo";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="max-w-[100rem] mx-auto">
      {/* MAIN */}
      <Header />
      <div className="h-[90vh]">
        <Hero />
      </div>

      {/* STATS & FEATURED ON */}
      <Features />

      {/* DOWNLOAD THE APP */}
      <AppInfo />

      {/* ADMISSION FORM */}
      <Admission />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
