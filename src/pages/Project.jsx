import "../css/project.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectCards from "../components/ProjectCards";

function Project() {
  const location = useLocation();
  const [filter, setFilter] = useState(location.state?.filter || "all");

  const handlefilter = (filter_val) => {
    setFilter(filter_val);
  };

  return (
    <main className="project-detail-page">
      <section className="project-detail-section section">
        {/* contanier 시작 */}
        <div className="container">
          {/* 헤더 시작 */}
          <div className="project-detail-header">
            <div className="intro-left">
              <div className="porject-detail-intro">
                <h2>Works</h2>
                <p>
                  실무 경험을 통해 작성한 테스트 케이스와 제작한 웹사이트를
                  정리했습니다.
                </p>
                <p>
                  서비스를 검증하는 관점뿐 아니라 화면 구현과 동작 구조를
                  이해하기 위해 학습한 작업물도 함께 담았습니다.
                </p>
              </div>
              <div className="project-tags">
                <span className="tag-web-qa">
                  <i className="fa fa-file-text-o"></i>Web TestCase
                </span>
                <span className="tag-game-qa">
                  <i className="fa fa-gamepad"></i>Game TestCase
                </span>
                <span className="tag-web-publish">
                  <i className="fa fa-globe"></i>Web Publishing
                </span>
                <span className="tag-react">
                  <i className="fa fa-code"></i>React
                </span>
              </div>
            </div>

            <div className="intro-right"></div>
          </div>
          {/* 헤더 끝 */}
        </div>
        {/* contanier 끝 */}
      </section>

      {/*툴바 시작*/}
      <section className="prject-filter-section section">
        <div className="project-filter-list container">
          <button
            type="button"
            className={filter === "all" ? "active" : "btn_type2"}
            onClick={() => handlefilter("all")}
          >
            전체 웍스<span>5</span>
          </button>
          <button
            type="button"
            className={filter === "TcMake" ? "active" : "btn_type2"}
            onClick={() => handlefilter("TcMake")}
          >
            TC 작성<span>2</span>
          </button>
          {/* <button
            type="button"
            className={filter === "gameTC" ? "active" : "btn_type2"}
            onClick={() => handlefilter("gameTC")}
          >
            게임 TC <span>1</span>
          </button> */}
          <button
            type="button"
            className={filter === "WebSite" ? "active" : "btn_type2"}
            onClick={() => handlefilter("WebSite")}
          >
            웹 사이트 제작<span>3</span>
          </button>
        </div>
      </section>
      {/*툴바 끝 */}
      {/* 프로젝트 카드 시작 */}
      <section className="project-card-detail section">
        <div className="container">
          <ProjectCards filter={filter} scrollto={location.state?.scrollto} />
        </div>
        {/* contanier 끝 */}
      </section>
      {/* 프로젝트 카드 끝 */}
    </main>
  );
}

export default Project;
