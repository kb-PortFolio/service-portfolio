import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollto) return;
    window.scrollTo({
      top: 0,
      left: 0,
    });
    // window.scrollTo(0,0) 으로 줄여서 쓸 수도 있음, behavior 옵션은 불가 오직 x,y
  }, [location.pathname]);
}
export default ScrollTop;
