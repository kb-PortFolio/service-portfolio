import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

function Home() {
  const [showMore, setShowMore] = useState(false);

  const experienceData = [
    {
      company: "디케이테크인",
      position: "QA 엔지니어",
      start: "2022.03",
      end: "2025.03",
      details: [
        "카카오웹툰·카카오페이지 Web/App 서비스 QA 수행",
        "테스트 케이스 작성·수행",
        "이슈 분석 및 결함 리포트 작성",
        "회귀 테스트 및 릴리즈 검증 수행",
      ],
    },
    {
      company: "펄어비스",
      position: "QA 테스터",
      extra: "(아르바이트)",
      start: "2021.08",
      end: "2021.11",
      details: [
        "검은사막 신규 빌드 대상 애드혹 테스트 진행",
        "콘텐츠·텍스트·UI 검수 수행",
        "테스트 결과 공유 및 피드백 전달",
      ],
    },
    {
      company: "인피아드",
      position: "웹 퍼블리셔",
      start: "2020.06",
      end: "2020.11",
      details: [
        "기업·개인 홈페이지 퍼블리싱 수행",
        "반응형 및 크로스 브라우징 작업",
        "HTML/CSS 기반 웹 페이지 구현",
        "홈페이지 유지보수 및 오류 수정",
      ],
    },
    {
      company: "쉬프트정보통신",
      position: "기술지원팀",
      start: "2018.05",
      end: "2019.07",
      details: [
        "고객사 Web ERP 솔루션 설치 및 기술 지원",
        "고객사 대상 API 활용 가이드 제공",
        "자사 솔루션 웹 퍼블리싱 및 UI 개선",
      ],
    },
    {
      company: "팜존에스엔씨",
      position: "웹 퍼블리셔",
      start: "2016.05",
      end: "2017.11",
      details: [
        "기업·개인 홈페이지 퍼블리싱 수행",
        "반응형 및 크로스 브라우징 작업",
        "HTML/CSS 기반 웹 페이지 구현",
        "홈페이지 유지보수 및 오류 수정",
      ],
    },
  ];

  const visibleExperience =
    showMore === true ? experienceData : experienceData.slice(0, 2);

  return (
    <main className="home-page">
      {/* hero 영역 시작 */}
      <section className="hero-section section">
        <div className="container">
          <div className="hero-left">
            <span className="hero-badge">QA Engineer Portfolio</span>
            <h2 className="hero-title">
              사용자 경험을 검증하고
              <br />
              서비스 <span>품질</span> 향상에 기여합니다.
            </h2>
            <p className="hero-desc">
              QA 실무 경험을 바탕으로 작성한 테스트 케이스와 버그 리포트를
              정리했습니다.
              <br />
              서비스 구조와 화면 구현 과정을 이해하기 위해 경험하고 학습한
              작업들을 함께 담았습니다.
            </p>
            <div className="hero-btn-wrap">
              <Link
                className="hero-outline-btn btn btn_type2"
                to="/project"
                state={{
                  filter: "TcMake",
                  scrollto: "toss",
                }}
              >
                QA Works 보기
              </Link>
              <Link
                className="hero-outline-btn btn btn_type2"
                to="/project"
                state={{
                  filter: "WebSite",
                  scrollto: "webSite2",
                }}
              >
                Other Works 보기
              </Link>
            </div>
          </div>
          <div className="hero-right"></div>
        </div>
      </section>
      {/* hero 영역 끝 */}

      {/* about me 영역 시작 */}
      <section className="about-section section">
        <div className="container">
          {/* about-content 시작 */}
          <div className="about-content">
            <div className="about-header">
              <h3 className="title-header">About Me</h3>
              <p>
                안녕하세요, 더 나은 품질을 만들기 위해 고민하고 실행하는 QA
                Engineer 입니다.
              </p>
            </div>
            <div className="about-panel">
              {/* 레이아웃을 감싸고 있으니 list보단 grid/card/layout 을 선호 */}
              <section className="profile-card">
                <h4>Profile</h4>
                <ul className="profile-list">
                  <li>
                    <span className="label">이름</span>
                    <span className="value">김보민</span>
                  </li>
                  <li>
                    <span className="label">직무</span>
                    <span className="value">QA Engineer</span>
                  </li>
                  <li>
                    <span className="label">경력</span>
                    <span className="value">
                      <span className="value-text">QA 엔지니어: 3년</span>
                      <span className="value-text">웹 퍼블리싱: 2년</span>
                      <span className="value-text">기술지원: 1년 3개월</span>
                    </span>
                  </li>
                  <li>
                    <span className="label">이메일</span>
                    <span className="value">nkusee3@gmail.com</span>
                  </li>
                  <li>
                    <span className="label">GitHub</span>
                    <span className="value text-accent">
                      <a href="">추가내용 필요</a>
                    </span>
                  </li>
                </ul>
              </section>
              <section className="experience-card">
                <h4>Experience</h4>

                <ul className="experience-list">
                  {visibleExperience.map((experience) => (
                    <li key={experience.company}>
                      <div className="timeline"></div>
                      <span className="label">
                        {experience.start} ~ {experience.end}
                      </span>
                      <div className="value">
                        <span>
                          {experience.company} | {experience.position}
                          {experience.extra && (
                            <>
                              <br />
                              {experience.extra}
                            </>
                          )}
                        </span>
                        <ul>
                          {experience.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  className="experience-more-btn"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "접기" : "경력 더보기"}
                </button>
              </section>

              <section className="strength-card">
                <h4>Strengths & Growth</h4>

                <ul className="strength-list">
                  <li>
                    <div className="icon-box">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>

                    <div className="content">
                      <h5>개선의 가능성을 찾는 것을 즐깁니다</h5>
                      <p>
                        게임을 더 재미있게 즐기기 위해 모드를 제작하고, 쾌적한
                        환경에서 플레이하기 위해 컴퓨터를 조립했습니다. 이
                        과정에서 게임 성능과 PC 사양에 대한 이해를 넓혔고,
                        사용자 관점에서 불편한 점과 개선점을 찾는 습관으로
                        이어졌습니다.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon-box">
                      <i className="fa fa-list-alt" aria-hidden="true"></i>
                    </div>

                    <div className="content">
                      <h5>커뮤니케이션 역량을 키워가고 있습니다</h5>
                      <p>
                        문제를 해결하는 데 집중하는 편이라 생각한 내용을 짧게
                        전달하는 경우가 있습니다. 최근에는 해결 과정과 결과를
                        보다 명확하게 공유하기 위해 노력하고 있습니다.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon-box">
                      <i className="fa fa-comments-o" aria-hidden="true"></i>
                    </div>

                    <div className="content">
                      <h5>오랫동안 기억되는 게임에 기여하고 싶습니다</h5>
                      <p>
                        게임은 단순한 콘텐츠를 넘어 좋은 추억을 남기는 문화라고
                        생각합니다. 오랫동안 사랑받는 게임 서비스에 기여하는
                        것이 목표입니다.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          {/* about-content 끝 */}
          {/* tools & skill 시작 */}
          <aside className="tools-card">
            <div className="tools-header">
              <h3 className="title-header">Tools & Skills</h3>
              <p>
                품질 검증부터 화면 구현까지, 실무와 개인 프로젝트를 통해 익힌
                기술들입니다.
              </p>
            </div>
            <ul className="tool-list">
              <li>
                <div className="logo-box">
                  <i className="fa fa-bug tool-icon"></i>
                </div>
                <div className="tool-content">
                  <h5>QA Testing</h5>
                  <span>기능 테스트 / TC 작성</span>
                </div>
                <div className="level">
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span></span>
                </div>
              </li>

              <li>
                <div className="logo-box">
                  <i className="fa fa-tasks tool-icon"></i>
                </div>
                <div className="tool-content">
                  <h5>Jira</h5>
                  <span>이슈 관리 및 협업</span>
                </div>
                <div className="level">
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span></span>
                </div>
              </li>

              <li>
                <div className="logo-box">
                  <i className="fa fa-chrome tool-icon"></i>
                </div>
                <div className="tool-content">
                  <h5>Chrome DevTools</h5>
                  <span>웹 UI 검증 및 디버깅</span>
                </div>
                <div className="level">
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span></span>
                  <span></span>
                </div>
              </li>

              <li>
                <div className="logo-box">
                  <i className="fa fa-html5 tool-icon"></i>
                </div>
                <div className="tool-content">
                  <h5>HTML / CSS</h5>
                  <span>반응형 웹 퍼블리싱</span>
                </div>
                <div className="level">
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span></span>
                </div>
              </li>

              <li>
                <div className="logo-box">
                  <i className="fa fa-cubes tool-icon"></i>
                </div>
                <div className="tool-content">
                  <h5>React</h5>
                  <span>컴포넌트 기반 UI 개발</span>
                </div>
                <div className="level">
                  <span className="is-active"></span>
                  <span className="is-active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
            </ul>
          </aside>
          {/* about-content 끝 */}
        </div>
      </section>
      {/* about me 영역 끝 */}

      {/* QA Project 영역 시작 */}
      <section className="project-section section">
        <div className="container">
          <div className="project-header section-header">
            <h3 className="title-header">QA Works</h3>
            <p>
              관심 있는 서비스를 분석하고 테스트 케이스를 작성한 기록입니다.
            </p>
          </div>

          {/* 카드시작 */}
          <article className="project-card">
            <div className="project-img">
              <img src="/images/toss-main.png" alt="토스증권 메인화면" />
            </div>
            <div className="project-info">
              <span className="category">PC웹</span>
              <h4>
                토스증권 메인 화면
                {/* <span>TC 작성</span> */}
              </h4>
              <p>
                실시간 차트, 종목 리스트, 사이드 영역을 분석하고 주요 기능에
                대한 테스트 케이스를 작성했습니다.
              </p>
              <div className="project-tags">
                <span>실시간 차트</span>
                <span>종목 리스트</span>
                <span>사이드 영역</span>
              </div>
            </div>

            <div className="project-summary-wrap">
              <div className="top-row">
                <div className="project-summary">
                  <div className="summary-header">
                    <div className="icon-box">
                      <i className="fa fa-comments-o" aria-hidden="true"></i>
                    </div>

                    <div className="summary-meta">
                      <span className="label">테스트케이스</span>
                      <strong>
                        <span>34</span>개
                      </strong>
                    </div>
                  </div>
                  <p className="summary-desc">기능·UI 테스트 작성</p>
                </div>

                <div className="project-summary">
                  <div className="summary-header">
                    <div className="icon-box">
                      <i className="fa fa-comments-o" aria-hidden="true"></i>
                    </div>

                    <div className="summary-meta">
                      <span className="label">버그 리포트</span>
                      <strong>
                        <span>2</span>개
                      </strong>
                    </div>
                  </div>
                  <p className="summary-desc">이슈 분석 및 리포트</p>
                </div>
              </div>
              <div className="bottom-row">
                <Link
                  to="/project"
                  state={{ filter: "TcMake", scrollto: "toss" }}
                  className="summary-btn btn_type1"
                >
                  상세 보기
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </article>
          {/* 토스 끝 */}

          <article className="project-card">
            <div className="project-img">
              <img
                src="/images/diablo_main.jpg"
                alt="디아블로 스탯 및 인벤토리 화면"
              />
            </div>
            <div className="project-info">
              <span className="category">PC게임</span>
              <h4>
                디아블로2 캐릭터 관련
                {/* <span>TC 작성</span> */}
              </h4>
              <p>
                인벤토리, 장비, 캐릭터, 용병 기능을 분석하고 주요 기능에 대한
                테스트 케이스를 작성했습니다.
              </p>

              <div className="project-tags">
                <span>인벤토리</span>
                <span>장비</span>
                <span>캐릭터</span>
                <span>용병</span>
              </div>
            </div>

            <div className="project-summary-wrap">
              <div className="top-row">
                <div className="project-summary">
                  <div className="summary-header">
                    <div className="icon-box">
                      <i className="fa fa-comments-o" aria-hidden="true"></i>
                    </div>

                    <div className="summary-meta">
                      <span className="label">테스트케이스</span>
                      <strong>
                        <span>66</span>개
                      </strong>
                    </div>
                  </div>
                  <p className="summary-desc">기능·UI 테스트 작성</p>
                </div>

                <div className="project-summary">
                  <div className="summary-header">
                    <div className="icon-box">
                      <i className="fa fa-comments-o" aria-hidden="true"></i>
                    </div>

                    <div className="summary-meta">
                      <span className="label">버그 리포트</span>
                      <strong>
                        <span>2</span>개
                      </strong>
                    </div>
                  </div>
                  <p className="summary-desc">이슈 분석 및 리포트</p>
                </div>
              </div>
              <div className="bottom-row">
                <Link
                  to="/project"
                  state={{ filter: "TcMake", scrollto: "game" }}
                  className="summary-btn btn_type1"
                >
                  상세 보기
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </article>
          {/*디아블로 끝 */}

          {/* <article className="project-card">
            <div className="project-img">
              <img src="" alt="" />
            </div>

            <div className="project-info">
              <span className="category">게임</span>

              <h4>라그나로크: 라이징 메인 화면</h4>

              <p>
                메인 UI와 주요 메뉴 동선을 분석하고 사용자 접근성을 고려한
                테스트 케이스를 작성했습니다.
              </p>

              <div className="project-tags">
                <span>메인 UI</span>
                <span>메뉴 동선</span>
                <span>사용자 흐름</span>
              </div>
            </div>

            <div className="project-summary-wrap">
              <div className="top-row">
                <div className="project-summary">
                  <div className="summary-header">
                    <div className="icon-box">
                      <i className="fa fa-comments-o" aria-hidden="true"></i>
                    </div>

                    <div className="summary-meta">
                      <span className="label">테스트케이스</span>
                      <strong>
                        <span>28</span>개
                      </strong>
                    </div>
                  </div>

                  <p className="summary-desc">기능·UI 테스트 작성</p>
                </div>

                <div className="project-summary">
                  <div className="summary-header">
                    <div className="icon-box">
                      <i className="fa fa-comments-o" aria-hidden="true"></i>
                    </div>

                    <div className="summary-meta">
                      <span className="label">버그 리포트</span>
                      <strong>
                        <span>3</span>개
                      </strong>
                    </div>
                  </div>

                  <p className="summary-desc">이슈 분석 및 리포트</p>
                </div>
              </div>

              <div className="bottom-row">
                <Link
                  className="summary-btn btn_type1"
                  to="/project"
                  state={{
                    scrollto: "game",
                    filter: "TcMake",
                  }}
                >
                  상세 보기
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </article> */}

          {/* 카드끝 */}
        </div>
      </section>
      {/* QA Project 영역 끝 */}

      {/* QA  Work 영역 시작 */}
      <section className="other-work-section section">
        <div className="container">
          <div className="other-work-header section-header">
            <h3 className="title-header">Other Works</h3>
            <p>실제 서비스중이거나 연습용으로 만든 제작물 입니다.</p>
          </div>
          <div className="other-work-panel">
            <article className="other-work-card">
              <div className="other-work-img">
                <img src="/images/project/zoosik_thumbnail.jpg" />
              </div>
              <h4>
                Zoosik <span className="badge badge-study">React Study</span>
              </h4>
              <p>React를 통해 만든 가상 주식거래 사이트 입니다.</p>

              <div className="other-work-category-wrap">
                <div className="other-work-category">
                  <i className="fa fa-comments-o" aria-hidden="true"></i>사이트
                  보기
                </div>
                <div className="other-work-category">
                  <i className="fa fa-comments-o" aria-hidden="true"></i>GitHub
                </div>
              </div>
              <Link
                to="/project"
                state={{ filter: "WebSite", scrollto: "react" }}
                className="summary-btn btn_type1"
              >
                상세 보기
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>

            <article className="other-work-card">
              <div className="other-work-img">
                <img src="/images/project/woolim_thumbnail.jpg" />
              </div>
              <h4>
                우림플랜트
                <span className="badge badge-study">Web Publishing</span>
              </h4>
              <p>
                플랜트 시공 기업 소개 및 사업 안내를 위한 반응형 웹사이트입니다.
              </p>

              <div className="other-work-category-wrap">
                <div className="other-work-category">
                  <i className="fa fa-comments-o" aria-hidden="true"></i>
                  반응형 웹
                </div>
                <div className="other-work-category">
                  <i className="fa fa-comments-o" aria-hidden="true"></i>기업
                  사이트
                </div>
              </div>
              <Link
                to="/project"
                state={{ filter: "WebSite", scrollto: "website1" }}
                className="summary-btn btn_type1"
              >
                상세 보기
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>

            <article className="other-work-card">
              <div className="other-work-img">
                <img src="/images/project/youngjae_thumbnail.jpg" />
              </div>
              <h4>
                영재피앤피
                <span className="badge badge-study">Web Publishing</span>
              </h4>
              <p>
                패키지 제작 기업 소개 및 제품 안내를 위한 반응형 웹사이트입니다.
              </p>

              <div className="other-work-category-wrap">
                <div className="other-work-category">
                  <i className="fa fa-comments-o" aria-hidden="true"></i>
                  반응형 웹
                </div>
                <div className="other-work-category">
                  <i className="fa fa-comments-o" aria-hidden="true"></i>
                  기업 사이트
                </div>
                <div className="other-work-category">
                  <i className="fa fa-comments-o" aria-hidden="true"></i>
                  인터랙션
                </div>
              </div>
              <Link
                to="/project"
                state={{ filter: "WebSite", scrollto: "website2" }}
                className="summary-btn btn_type1"
              >
                상세 보기
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
          </div>
        </div>
      </section>
      {/* QA  Work 영역 끝 */}
    </main>
  );
}

export default Home;
