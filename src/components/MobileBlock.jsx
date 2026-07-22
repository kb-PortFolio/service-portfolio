import { useEffect } from "react";
import "../css/mobileBlock.css";

function MobileBlock() {
  useEffect(() => {
    const root = document.getElementById("root");
    root.style.paddingTop = "0";

    return () => {
      root.style.paddingTop = "5rem";
    };
    // useEffect의 return은 cleanup 함수만 반환 가능
  }, []);
  return (
    <div className="mobile-block">
      <div className="mobile-card">
        <h1 className="mobile-title">
          데스크톱 환경에
          <br />
          최적화되어 있습니다
        </h1>

        <img
          src="/images/mobile-content.png"
          alt="Portfolio Preview"
          className="mobile-preview"
        />
        <p className="mobile-desc">
          테스트 케이스와 프로젝트는
          <br />
          PC에서 더 자세히 확인하실 수 있습니다.
        </p>
        <p className="mobile-resolution">최소 요구 넓이 : 1440px</p>
      </div>
    </div>
  );
}

export default MobileBlock;
