import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestCase from "./pages/TestCase";
import BugReport from "./pages/BugReport";
import ScrollTop from "./components/ScrollTop";
import MobileBlock from "./components/MobileBlock";

function App() {
  // const test = useLocation();
  //최상단에 useLocation을 쓸 수 없음 해당 함수는 BrowserRouter 내부 컴포넌트에서만 사용 가능
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width:1479px)");
    //css media query 문법을 그대로 적용하기 때문에 ()도 써줘야함
    // @media (max-width:1479px){}
    setIsMobile(media.matches);

    const handleChange = (s) => {
      setIsMobile(s.matches);
      console.log("[해상도]", `${window.innerWidth}px`, s.matches);
    };

    media.addEventListener("change", handleChange);
    //   브라우저가 "change" 발생 시 자동으로 handleChange(event)를 호출하며
    //   event 객체를 첫 번째 인자(s)로 전달해준다.

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  if (isMobile === null) return null;
  // return;도 가능하지만 의도를 명확히 하기 위해 return null; 사용

  return (
    <BrowserRouter>
      {isMobile ? (
        <MobileBlock />
      ) : (
        <>
          <ScrollTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/testcase/:type" element={<TestCase />} />
            <Route path="/BugReport/:bugType" element={<BugReport />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
