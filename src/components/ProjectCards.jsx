import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

function ProjectCards({ filter, scrollto }) {
  const testRef = useRef({
    game: null,
    toss: null,
    react: null,
    website1: null,
    website2: null,
  });
  // useRef(123) => current: 123 바로 current 속성에 넣어줌

  useEffect(() => {
    const target = testRef.current[scrollto];

    target?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [scrollto]);
  return (
    <>
      {(filter === "all" || filter === "TcMake") && (
        <>
          {/* 토스증권 시작 */}
          <article
            className="project-card"
            ref={(el) => {
              testRef.current.toss = el;
            }}
          >
            <div className="top-row">
              <div className="project-img">
                <img src="/images/toss-main.png" alt="토스증권 메인 화면" />
              </div>

              <div className="project-info">
                <span className="category">PC웹</span>

                <h4>토스증권 메인 화면</h4>
                <div className="desc-box">
                  <p>
                    토스증권은 국내 증권 서비스 중 UI/UX 완성도가 높고 다양한
                    기능이 유기적으로 연결되어 있어 테스트 대상으로
                    선정했습니다.
                  </p>

                  <p>
                    사용자가 실제로 접하게 되는 화면 순서를 기준으로 테스트
                    케이스를 작성하며 기능 검증 과정을 정리했고, 버그 리포트
                    문서화까지 진행하며 QA 업무에서 요구되는 검증 관점과 문서
                    작성 능력을 표현하고자 했습니다.
                  </p>
                </div>

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
              </div>
            </div>

            <div className="bottom-row">
              <div className="project-outline">
                <h4>Work 개요</h4>

                <ul>
                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      목적
                    </span>

                    <span className="text">
                      QA 문서 작성 과정을 정리하고 검증 관점을 기록하기 위해
                      진행
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      수행 역할
                    </span>

                    <span className="text">
                      화면 분석 · 테스트 케이스 작성 · 버그 리포트 작성
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      테스트 범위
                    </span>

                    <span className="text">
                      실시간 차트 · 종목 리스트 · 사이드 영역
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      테스트 환경
                    </span>

                    <span className="text">PC Web (Chrome)</span>
                  </li>
                </ul>
              </div>

              <div className="project-task">
                <h4>주요 업무</h4>

                <ul>
                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      토스증권 메인 화면 구조 및 주요 기능 검토
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      주요 기능 대상 테스트 케이스 34건 작성
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      UI 요소 및 동작 기준 검토
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      기능 이슈 기반 버그 리포트 2건 작성
                    </span>
                  </li>
                </ul>

                <div className="bottom-row">
                  <Link to="/testcase/toss" className="summary-btn btn_type1">
                    테스트 케이스 보기
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Link>

                  <Link
                    to="/testcase/toss"
                    state={{
                      tutorial: true,
                    }}
                    className="summary-btn btn_type1"
                  >
                    버그 리포트 보기
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </article>
          {/* 토스끝 시작 */}
          {/* 디아블로 시작 */}
          <article
            className="project-card"
            ref={(el) => {
              testRef.current.game = el;
            }}
          >
            <div className="top-row">
              <div className="project-img">
                <img src="/images/diablo_main.jpg" alt="디아블로 메인 화면" />
              </div>

              <div className="project-info">
                <span className="category">PC게임</span>

                <h4>디아블로2 캐릭터 관련</h4>
                <div className="desc-box">
                  <p>
                    디아블로2 레저렉션은 인벤토리, 장비, 스탯 등 RPG의 핵심
                    기능이 직관적으로 구성되어 있어 다양한 기능 검증에
                    적합하다고 판단하여 테스트 대상으로 선정했습니다.
                  </p>

                  <p>
                    플레이어가 반복적으로 사용하는 기능을 중심으로 아이템 이동,
                    장비 착용 및 해제, 능력치 반영, 용병 관리 등의 테스트 항목을
                    작성하며 기능별 검증 기준과 기대 결과를 정리했고, 이를
                    테스트 케이스로 구체화하는 과정을 담고자 했습니다.
                  </p>
                </div>

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
                          <span>3</span>개
                        </strong>
                      </div>
                    </div>

                    <p className="summary-desc">이슈 분석 및 리포트</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-row">
              <div className="project-outline">
                <h4>Work 개요</h4>

                <ul>
                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      목적
                    </span>

                    <span className="text">
                      기능이 명확한 RPG를 대상으로 QA 테스트를 진행
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      수행 역할
                    </span>

                    <span className="text">
                      기능 분석 · 테스트 케이스 작성 · 버그 리포트 작성
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      테스트 범위
                    </span>

                    <span className="text">
                      인벤토리 · 장비 · 캐릭터 · 용병
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      테스트 환경
                    </span>

                    <span className="text">Windows 11pro 25H2</span>
                  </li>
                </ul>
              </div>

              <div className="project-task">
                <h4>주요 업무</h4>

                <ul>
                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      인벤토리 · 장비 · 캐릭터 · 용병 기능 분석
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      주요 기능 대상 테스트 케이스 66건 작성
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      기능 동작 및 적용 결과 검토
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      기능 이슈 기반 버그 리포트 2건 작성
                    </span>
                  </li>
                </ul>

                <div className="bottom-row">
                  <Link
                    to="/testcase/diablo2"
                    className="summary-btn btn_type1"
                  >
                    테스트 케이스 보기
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Link>

                  <Link
                    to="/testcase/diablo2"
                    state={{
                      tutorial: true,
                    }}
                    className="summary-btn btn_type1"
                  >
                    버그 리포트 보기
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </article>
          {/* 디아블로 끝*/}
        </>
      )}
      {(filter === "all" || filter === "WebSite") && (
        <>
          {/* Zoosik 시작 */}
          <article
            className="project-card"
            ref={(el) => {
              testRef.current.react = el;
            }}
          >
            <div className="top-row">
              <div className="project-img">
                <img
                  src="/images/project/zoosik_thumbnail.jpg"
                  alt="zoosik 앱 설명 스크린샷"
                />
              </div>

              <div className="project-info">
                <span className="category">React</span>

                <h4>Zoosik 가상 주식 거래 웹사이트</h4>
                <div className="desc-box">
                  <p>
                    React 학습 과정에서 제작한 가상 주식 거래 모바일 웹
                    애플리케이션입니다.
                  </p>

                  <p>
                    사용자는 가상 자산을 이용해 주식을 매수·매도할 수 있으며,
                    실시간 차트, 보유 종목 관리, 거래 내역 조회 기능을
                    제공합니다.
                  </p>
                  <p>
                    컴포넌트 분리, 상태 관리, 라우팅 구조 설계 등 React 기반
                    프론트엔드 개발 과정을 학습하고자 제작했습니다.
                  </p>
                </div>

                <div className="project-tags">
                  <span>실시간 차트</span>
                  <span>매수/매도</span>
                  <span>거래 내역</span>
                </div>
              </div>

              <div className="project-summary-wrap website">
                <div className="top-row">
                  <div className="project-summary">
                    <div className="summary-header">
                      <div className="icon-box">
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                      </div>

                      <div className="summary-meta">
                        <span className="label">담당 영역</span>
                        <strong>
                          <span>전체 개발</span>
                        </strong>
                      </div>
                    </div>

                    <p className="summary-desc">기획 · UI · 기능 구현</p>
                  </div>

                  <div className="project-summary">
                    <div className="summary-header">
                      <div className="icon-box">
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                      </div>

                      <div className="summary-meta">
                        <span className="label">개발 기간</span>
                        <strong>
                          <span>4</span>개월
                        </strong>
                      </div>
                    </div>

                    <p className="summary-desc">개인 프로젝트</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-row">
              <div className="project-outline">
                <h4>Work 개요</h4>

                <ul>
                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      목적
                    </span>

                    <span className="text">
                      React 학습 및 프론트엔드 개발 경험 습득
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      수행 역할
                    </span>

                    <span className="text">
                      기획 · UI 구현 · 기능 개발 · Firebase 연동
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      개발 범위
                    </span>

                    <span className="text">
                      실시간 차트 · 종목 리스트 · 매수/매도 · 거래 내역 · 로그인
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      개발 도구
                    </span>

                    <span className="text">
                      React · React Router · Firebase · CSS3
                    </span>
                  </li>
                </ul>
              </div>

              <div className="project-task">
                <h4>주요 업무</h4>

                <ul>
                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      React Router 기반 페이지 라우팅 구성
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      컴포넌트 분리 및 상태 관리 구조 설계
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      실시간 주식 가격 변동 로직 구현
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      가상 자산 기반 매수·매도 기능 구현
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      보유 종목 및 거래 내역 관리 기능 구현
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      Firebase 연동 및 사용자 데이터 저장
                    </span>
                  </li>
                </ul>

                <div className="bottom-row">
                  <Link to="/testcase/toss" className="summary-btn btn_type1">
                    사이트 바로가기
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Link>

                  <Link
                    to="/testcase/toss"
                    state={{
                      tutorial: true,
                    }}
                    className="summary-btn btn_type1"
                  >
                    GitHub 보기
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </article>
          {/* Zoosik 끝 */}
          {/* 우림플랜트 시작 */}
          <article
            className="project-card"
            ref={(el) => {
              testRef.current.website1 = el;
            }}
          >
            <div className="top-row">
              <div className="project-img">
                <img
                  src="/images/project/woolim_thumbnail.jpg"
                  alt="우림플랜트 메인홈 설명 스크린샷"
                />
              </div>

              <div className="project-info">
                <span className="category">React</span>

                <h4>우림플랜트 기업 웹사이트</h4>
                <div className="desc-box">
                  <p>
                    발전설비 및 플랜트 시공 전문 기업인 우림플랜트의 기업 소개
                    및 사업 분야 안내를 위한 반응형 웹사이트 구축
                    프로젝트입니다.
                  </p>

                  <p>
                    디자이너가 제공한 PSD 시안을 기반으로 HTML5, CSS3, jQuery를
                    활용하여 화면을 구현했으며, 슬라이드, 메뉴 기능, 화면
                    애니메이션 등 다양한 웹사이트 화면과 동작을 구현했습니다.
                  </p>

                  <p>
                    또한 PC, Tablet, Mobile 환경에 대응하는 반응형 웹 퍼블리싱을
                    진행했습니다.
                  </p>
                </div>

                <div className="project-tags">
                  <span>반응형 웹</span>
                  <span>기업 사이트</span>
                </div>
              </div>

              <div className="project-summary-wrap website">
                <div className="top-row">
                  <div className="project-summary">
                    <div className="summary-header">
                      <div className="icon-box">
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                      </div>

                      <div className="summary-meta">
                        <span className="label">담당 영역</span>
                        <strong>
                          <span>웹 퍼블리싱</span>
                        </strong>
                      </div>
                    </div>

                    <p className="summary-desc">HTML · CSS · jQuery</p>
                  </div>

                  <div className="project-summary">
                    <div className="summary-header">
                      <div className="icon-box">
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                      </div>

                      <div className="summary-meta">
                        <span className="label">개발 기간</span>
                        <strong>
                          <span>1.5</span>주
                        </strong>
                      </div>
                    </div>

                    <p className="summary-desc">
                      실무 프로젝트
                      <br />
                      2020.11
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-row">
              <div className="project-outline">
                <h4>Work 개요</h4>

                <ul>
                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      목적
                    </span>

                    <span className="text">
                      플랜트 시공 기업 소개 및 사업 안내 사이트 구축
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      수행 역할
                    </span>

                    <span className="text">웹 퍼블리싱</span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      개발 범위
                    </span>

                    <span className="text">
                      메인 페이지 · 서브 페이지 (PC · Mobile)
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      개발 도구
                    </span>

                    <span className="text">HTML5 · CSS3 · jQuery </span>
                  </li>
                </ul>
              </div>

              <div className="project-task">
                <h4>주요 업무</h4>

                <ul>
                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      PC · Tablet · Mobile 반응형 웹 구현
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      PSD 시안 기반 웹 화면 퍼블리싱
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      jQuery 기반 슬라이드 · 메뉴 · 화면 애니메이션 구현
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      게시판 · 문의사항 등 개발 연동 화면 마크업 작성
                    </span>
                  </li>
                </ul>

                <div className="bottom-row">
                  <a
                    href="http://www.woolimplant.co.kr/"
                    target="_blank"
                    className="summary-btn btn_type1"
                  >
                    사이트 바로가기
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>

                  {/* <Link
                    to="/testcase/toss"
                    state={{
                      tutorial: true,
                    }}
                    className="summary-btn btn_type1"
                  >
                    GitHub 보기
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </article>
          {/* 우림플랜트 끝 */}
          {/* 영재피앤피 시작 */}
          <article
            className="project-card"
            ref={(el) => {
              testRef.current.website2 = el;
            }}
          >
            <div className="top-row">
              <div className="project-img">
                <img
                  src="/images/project/youngjae_thumbnail.jpg"
                  alt="영재피앤피 메인홈 설명 스크린샷"
                />
              </div>

              <div className="project-info">
                <span className="category">React</span>

                <h4>영재피앤피 기업 웹사이트</h4>
                <div className="desc-box">
                  <p>
                    종이 패키지 제작 전문 기업 영재피앤피의 기업 소개, 제품 안내
                    및 견적 문의를 위한 반응형 웹사이트 구축 프로젝트입니다.
                  </p>
                  <p>
                    디자이너가 제공한 PSD 시안을 기반으로 HTML5, CSS3, jQuery를
                    활용하여 화면을 구현했으며, 원페이지 메인 화면, 제품 분류
                    탭, 슬라이드, 포트폴리오, 견적문의 게시판 등 다양한 웹사이트
                    기능을 제작했습니다.
                  </p>
                  <p>
                    또한 PC, Tablet, Mobile 환경에 대응하는 반응형 웹 퍼블리싱을
                    진행했습니다.
                  </p>
                </div>

                <div className="project-tags">
                  <span>반응형 웹</span>
                  <span>기업 사이트</span>
                  <span>스크롤 인터랙션</span>
                </div>
              </div>

              <div className="project-summary-wrap website">
                <div className="top-row">
                  <div className="project-summary">
                    <div className="summary-header">
                      <div className="icon-box">
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                      </div>

                      <div className="summary-meta">
                        <span className="label">담당 영역</span>
                        <strong>
                          <span>웹 퍼블리싱</span>
                        </strong>
                      </div>
                    </div>

                    <p className="summary-desc">HTML · CSS · jQuery</p>
                  </div>

                  <div className="project-summary">
                    <div className="summary-header">
                      <div className="icon-box">
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                      </div>

                      <div className="summary-meta">
                        <span className="label">개발 기간</span>
                        <strong>
                          <span>2</span>주
                        </strong>
                      </div>
                    </div>

                    <p className="summary-desc">
                      실무 프로젝트
                      <br />
                      2020.10
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-row">
              <div className="project-outline">
                <h4>Work 개요</h4>

                <ul>
                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      목적
                    </span>

                    <span className="text">
                      패키지 제작 기업 소개 및 제품 안내 사이트 구축
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      수행 역할
                    </span>

                    <span className="text">웹 퍼블리싱</span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      개발 범위
                    </span>

                    <span className="text">
                      메인 페이지 · 서브 페이지 (PC · Mobile)
                    </span>
                  </li>

                  <li>
                    <span className="label">
                      <i className="fa fa-check-square-o"></i>
                      개발 도구
                    </span>

                    <span className="text">HTML5 · CSS3 · jQuery </span>
                  </li>
                </ul>
              </div>

              <div className="project-task">
                <h4>주요 업무</h4>

                <ul>
                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      PC · Tablet · Mobile 반응형 웹 구현
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      PSD 시안 기반 웹 화면 퍼블리싱
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      jQuery 기반 원페이지 스크롤 · 슬라이드 · 메뉴 애니메이션
                      구현
                    </span>
                  </li>

                  <li>
                    <span>
                      <i className="fa fa-check-square-o"></i>
                      견적문의 · 포트폴리오 등 개발 연동 화면 마크업 작성
                    </span>
                  </li>
                </ul>

                <div className="bottom-row">
                  <a
                    href="https://yjpnp.co.kr/"
                    target="_blank"
                    className="summary-btn btn_type1"
                  >
                    사이트 바로가기
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </article>
          {/* 영재피앤피 끝 */}
        </>
      )}
    </>
  );
}

export default ProjectCards;
