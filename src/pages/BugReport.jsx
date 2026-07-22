import "../css/bugreport.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function BugReport() {
  const { bugType } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  console.log("파람", bugType, "유스파람", useParams());

  return (
    <main className="bug-report-page">
      <section className="bug-report-section section">
        <div className="container">
          {bugType === "toss-01" && (
            <article className="bug-report-card">
              {/* bug-report-header 시작 */}
              <header className="bug-report-header">
                <Link className="page-back-link" to="/testcase/toss">
                  <i class="fa fa-arrow-left"></i>
                  토스 증권 Test Case 로 돌아가기
                </Link>

                <div className="bug-report-summary">
                  <i className="fa fa-bug" aria-hidden="true"></i>
                  <span className="bug-title">BUG-CHART-001</span>
                  {/* <span className="bug-status open">Oepn</span>
              <span className="bug-status high">High</span> */}
                  <span className="bug-status minor">Minor</span>
                </div>

                <h2 className="bug-report-title">
                  투자위험 주식 숨기기 필터가 노출되지 않음
                </h2>

                <div className="bug-report-meta">
                  <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="meta-title">작성자</span>
                    <span className="divider">|</span>
                    <span className="meta-value">KIM QA</span>
                  </div>
                  <div>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="meta-title">작성일</span>
                    <span className="divider">|</span>
                    <span className="meta-value">2026-06-05</span>
                  </div>

                  <div>
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <span className="meta-title">라벨</span>
                    <span className="divider">|</span>
                    <span className="meta-value">UI, 실시간 차트, 필터</span>
                  </div>
                </div>
              </header>
              {/* bug-report-header 끝 */}
              {/* bug-report-content-wrap 시작 */}
              <div className="bug-report-content-wrap">
                <div className="bug-report-content">
                  <div className="content-box description-box">
                    <h4>1. 상세 내용</h4>
                    <p className="content-txt">
                      메인 페이지 진입 후 실시간 차트 필터 영역에서 '투자위험
                      주식 숨기기' 필터가 노출되지 않는다.
                    </p>
                  </div>
                  <div className="content-row">
                    <div className="content-box steps-box">
                      <h4>2. 재현 단계</h4>
                      <ul>
                        <li>
                          <span className="step-num">1</span>토스증권 PC웹
                          (https://www.tossinvest.com/) 접속
                        </li>
                        <li>
                          <span className="step-num">2</span>실시간 차트 필터
                          영역 확인
                        </li>
                        <li>
                          <span className="step-num">3</span>
                          "투자위험 주식 숨기기" 필터 노출 여부 확인
                        </li>
                      </ul>
                    </div>
                    <div className="content-box expected-box">
                      <h4>3. 기대 결과</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check expected-icon"></i>
                          '투자위험 주식 숨기기' 필터가 노출되어야 한다
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-box actual-box">
                    <h4>4. 실제 결과</h4>
                    <ul>
                      <li>
                        <i className="fa fa-times actual-icon"></i>'투자위험
                        주식 숨기기' 필터가 노출되지 않는다
                      </li>
                    </ul>
                  </div>
                  <div className="content-box attachments-box">
                    <h4>5. 첨부 파일</h4>
                    <ul>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/toss/actual_01-1.png",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/toss/actual_01-1.png" />
                        </div>
                        <span className="title-attachments">버그 화면.jpg</span>
                      </li>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/toss/expected_01-1.png",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/toss/expected_01-1.png" />
                        </div>
                        <span className="title-attachments">정상 화면.jpg</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bug-report-info">
                  <div className="content-box environment-box">
                    <h4>6. 환경 정보</h4>
                    <ul>
                      <li>
                        <span className="title-environment">버전</span>
                        <span>v1.4.10</span>
                      </li>
                      <li>
                        <span className="title-environment">플랫폼</span>
                        <span>Web</span>
                      </li>
                      <li>
                        <span className="title-environment">브라우저</span>
                        <span>Chrome 124.0.6367.119</span>
                      </li>
                      <li>
                        <span className="title-environment">OS</span>
                        <span>Windows 11 Pro(25H2)</span>
                      </li>
                      <li>
                        <span className="title-environment">해상도</span>
                        <span>1920 * 1080</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content-box frequency-box">
                    <h4>7. 발생 빈도</h4>
                    <p className="frequency-value">
                      <i className="fa fa-clock-o icon-value"></i>
                      Always
                    </p>
                    <p className="frequency-desc">
                      모든 테스트 환경에서 항상 재현됩니다
                    </p>
                  </div>
                  <div className="content-box priority-box">
                    <h4>8. 심각도</h4>

                    <div className="priority-wrap">
                      <div className="priority-item">
                        <p className="priority-value">
                          <i className="fa fa-plus-circle icon-priority-down miner"></i>
                          Minor
                        </p>
                        <p className="priority-desc">제한적 영향</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-box related-tc-box">
                    <h4>9. 관련 테스트 케이스</h4>

                    <Link to="/BugReport/toss-02" className="related-tc-link">
                      BUG-CHART-002
                      <i className="fa fa-external-link icon-related"></i>
                    </Link>

                    <p className="related-tc-desc">
                      '투자위험 주식 숨기기' 필터 선택 시 작동되지 않는 현상
                    </p>
                  </div>
                </div>
              </div>
              {/* bug-report-content-wrap 끝 */}
            </article>
          )}
          {bugType === "toss-02" && (
            <article className="bug-report-card">
              {/* bug-report-header 시작 */}
              <header className="bug-report-header">
                <Link className="page-back-link" to="/testcase/toss">
                  <i class="fa fa-arrow-left"></i>
                  토스 증권 Test Case 로 돌아가기
                </Link>

                <div className="bug-report-summary">
                  <i className="fa fa-bug" aria-hidden="true"></i>
                  <span className="bug-title">BUG-CHART-002</span>
                  {/* <span className="bug-status open">Oepn</span>
              <span className="bug-status high">High</span> */}
                  <span className="bug-status minor">Minor</span>
                </div>

                <h2 className="bug-report-title">
                  투자위험 주식 숨기기가 활성화 되었으나 실시간 차트 리스트에
                  노출됨
                </h2>

                <div className="bug-report-meta">
                  <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="meta-title">작성자</span>
                    <span className="divider">|</span>
                    <span className="meta-value">KIM QA</span>
                  </div>
                  <div>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="meta-title">작성일</span>
                    <span className="divider">|</span>
                    <span className="meta-value">2026-06-05</span>
                  </div>

                  <div>
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <span className="meta-title">라벨</span>
                    <span className="divider">|</span>
                    <span className="meta-value">UI, 실시간 차트, 필터</span>
                  </div>
                </div>
              </header>
              {/* bug-report-header 끝 */}
              {/* bug-report-content-wrap 시작 */}
              <div className="bug-report-content-wrap">
                <div className="bug-report-content">
                  <div className="content-box summary-box">
                    <h4>1. 상세 내용</h4>
                    <p className="content-txt">
                      "투자위험 주식 숨기기" 필터가 활성화되어 있음에도 투자위험
                      종목이 실시간 차트 리스트에 노출된다
                    </p>
                    <p className="content-txt">
                      국가, 카테고리, 기간 필터의 값에 관계 없이 재현된다
                    </p>
                  </div>

                  <div className="content-row">
                    <div className="content-box steps-box">
                      <h4>2. 재현 단계</h4>
                      <ul>
                        <li>
                          <span className="step-num">1</span>토스증권 PC웹
                          (https://www.tossinvest.com/) 접속
                        </li>
                        <li>
                          <span className="step-num">2</span>실시간 차트 필터
                          영역 확인
                        </li>
                        <li>
                          <span className="step-num">3</span>
                          "투자위험 주식 숨기기" 필터 활성화 확인
                        </li>
                        <li>
                          <span className="step-num">4</span>
                          국가, 카테고리, 기간 필터 값 유지 또는 변경하기
                        </li>
                      </ul>
                    </div>
                    <div className="content-box expected-box">
                      <h4>3. 기대 결과</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check expected-icon"></i>
                          "투자위험 주식" 은 실시간 차트 리스트에서 노출되지
                          않아야한다
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-box actual-box">
                    <h4>4. 실제 결과</h4>
                    <ul>
                      <li>
                        <i className="fa fa-times actual-icon"></i>
                        "투자위험 주식 숨기기" 필터가 활성화되어 있음에도
                        투자위험 종목이 실시간 차트 리스트에 노출됨
                      </li>
                    </ul>
                  </div>
                  <div className="content-box attachments-box">
                    <h4>5. 첨부 파일</h4>
                    <ul>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/toss/actual_02-1.jpg",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/toss/actual_02-1.jpg" />
                        </div>
                        <span className="title-attachments">버그 화면.jpg</span>
                      </li>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/toss/expected_02-1.jpg",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/toss/expected_02-1.jpg" />
                        </div>
                        <span className="title-attachments">정상 화면.jpg</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bug-report-info">
                  <div className="content-box environment-box">
                    <h4>6. 환경 정보</h4>
                    <ul>
                      <li>
                        <span className="title-environment">버전</span>
                        <span>v1.4.10</span>
                      </li>
                      <li>
                        <span className="title-environment">플랫폼</span>
                        <span>Web</span>
                      </li>
                      <li>
                        <span className="title-environment">브라우저</span>
                        <span>Chrome 124.0.6367.119</span>
                      </li>
                      <li>
                        <span className="title-environment">OS</span>
                        <span>Windows 11(24H2)</span>
                      </li>
                      <li>
                        <span className="title-environment">해상도</span>
                        <span>1920 * 1080</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content-box frequency-box">
                    <h4>7. 발생 빈도</h4>
                    <p className="frequency-value">
                      <i className="fa fa-clock-o icon-value"></i>
                      Always
                    </p>
                    <p className="frequency-desc">
                      모든 테스트 환경에서 항상 재현됩니다
                    </p>
                  </div>
                  <div className="content-box priority-box">
                    <h4>8. 심각도</h4>

                    <div className="priority-wrap">
                      <div className="priority-item">
                        <p className="priority-value">
                          <i className="fa fa-plus-circle icon-priority-down miner"></i>
                          Minor
                        </p>
                        <p className="priority-desc">제한적 영향</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-box related-tc-box">
                    <h4>9. 관련 테스트 케이스</h4>

                    <Link to="/BugReport/toss-01" className="related-tc-link">
                      BUG-CHART-001
                      <i className="fa fa-external-link icon-related"></i>
                    </Link>

                    <p className="related-tc-desc">
                      '투자위험 주식 숨기기' 필터 선택 시 작동되지 않는 현상
                    </p>
                  </div>
                </div>
              </div>
              {/* bug-report-content-wrap 끝 */}
            </article>
          )}
          {bugType === "diablo-01" && (
            <article className="bug-report-card">
              {/* bug-report-header 시작 */}
              <header className="bug-report-header">
                <Link className="page-back-link" to="/testcase/diablo2">
                  <i class="fa fa-arrow-left"></i>
                  디아블로2 Test Case 로 돌아가기
                </Link>

                <div className="bug-report-summary">
                  <i className="fa fa-bug" aria-hidden="true"></i>
                  <span className="bug-title">BUG-D2-001</span>
                  {/* <span className="bug-status open">Oepn</span>
              <span className="bug-status high">High</span> */}
                  <span className="bug-status minor">Minor</span>
                </div>

                <h2 className="bug-report-title">
                  인벤토리에서 아이템 이동 후 기존 슬롯에 아이템 이미지가
                  남아있는 현상
                </h2>

                <div className="bug-report-meta">
                  <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="meta-title">작성자</span>
                    <span className="divider">|</span>
                    <span className="meta-value">KIM QA</span>
                  </div>
                  <div>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="meta-title">작성일</span>
                    <span className="divider">|</span>
                    <span className="meta-value">2026-06-05</span>
                  </div>

                  <div>
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <span className="meta-title">라벨</span>
                    <span className="divider">|</span>
                    <span className="meta-value">
                      UI, 인벤토리, 아이템 이동
                    </span>
                  </div>
                </div>
              </header>
              {/* bug-report-header 끝 */}
              {/* bug-report-content-wrap 시작 */}
              <div className="bug-report-content-wrap">
                <div className="bug-report-content">
                  <div className="content-box summary-box">
                    <h4>1. 상세 내용</h4>
                    <p className="content-txt">
                      인벤토리에서 아이템을 빈 슬롯으로 이동하면 실제 아이템은
                      정상적으로 이동하지만, 기존 슬롯에도 아이템 이미지가
                      그대로 표시된다.
                    </p>
                    <p className="content-txt">
                      인벤토리를 닫았다가 다시 열거나 다른 아이템을 이동하기
                      전까지 기존 슬롯의 아이템 이미지가 사라지지 않는다.
                    </p>
                  </div>

                  <div className="content-row">
                    <div className="content-box steps-box">
                      <h4>2. 재현 단계</h4>
                      <ul>
                        <li>
                          <span className="step-num">1</span>
                          캐릭터 인벤토리 오픈
                        </li>
                        <li>
                          <span className="step-num">2</span>
                          임의 아이템 선택
                        </li>
                        <li>
                          <span className="step-num">3</span>빈 슬롯으로 아이템
                          이동
                        </li>
                        <li>
                          <span className="step-num">4</span>
                          기존 슬롯 확인
                        </li>
                      </ul>
                    </div>
                    <div className="content-box expected-box">
                      <h4>3. 기대 결과</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check expected-icon"></i>
                          아이템 이동 후 기존 슬롯은 빈 상태로 표시되어야 한다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-box actual-box">
                    <h4>4. 실제 결과</h4>
                    <ul>
                      <li>
                        <i className="fa fa-times actual-icon"></i>
                        아이템 이동 후 기존 슬롯에 아이템 이미지가 그대로
                        남아있다.
                      </li>
                    </ul>
                  </div>
                  <div className="content-box attachments-box">
                    <h4>5. 첨부 파일</h4>
                    <ul>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/d2/actual_01-1.jpg",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/d2/actual_01-1.jpg" />
                        </div>
                        <span className="title-attachments">
                          아이템 이동 전.jpg
                        </span>
                      </li>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/d2/actual_01-2.jpg",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/d2/actual_01-2.jpg" />
                        </div>
                        <span className="title-attachments">
                          아이템 이동 후.jpg
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bug-report-info">
                  <div className="content-box environment-box">
                    <h4>6. 환경 정보</h4>
                    <ul>
                      <li>
                        <span className="title-environment">버전</span>
                        <span>3.2.92777</span>
                      </li>
                      <li>
                        <span className="title-environment">플랫폼</span>
                        <span>PC</span>
                      </li>

                      <li>
                        <span className="title-environment">OS</span>
                        <span>Windows 11 Pro(25H2)</span>
                      </li>
                      <li>
                        <span className="title-environment">해상도</span>
                        <span>1920 * 1080</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content-box frequency-box">
                    <h4>7. 발생 빈도</h4>
                    <p className="frequency-value">
                      <i className="fa fa-clock-o icon-value"></i>
                      Always
                    </p>
                    <p className="frequency-desc">
                      모든 테스트 환경에서 항상 재현됩니다
                    </p>
                  </div>
                  <div className="content-box priority-box">
                    <h4>8. 심각도</h4>

                    <div className="priority-wrap">
                      <div className="priority-item">
                        <p className="priority-value">
                          <i className="fa fa-plus-circle icon-priority-down miner"></i>
                          Minor
                        </p>
                        <p className="priority-desc">제한적 영향</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-box related-tc-box">
                    <h4>9. 관련 테스트 케이스</h4>

                    <Link to="/BugReport/diablo-02" className="related-tc-link">
                      BUG-D2-002
                      <i className="fa fa-external-link icon-related"></i>
                    </Link>

                    <p className="related-tc-desc">
                      인벤토리에서 아이템 이동 후 이동한 슬롯에서 아이템을
                      선택할 수 없는 현상
                    </p>
                  </div>
                </div>
              </div>
              {/* bug-report-content-wrap 끝 */}
            </article>
          )}
          {bugType === "diablo-02" && (
            <article className="bug-report-card">
              {/* bug-report-header 시작 */}
              <header className="bug-report-header">
                <Link className="page-back-link" to="/testcase/diablo2">
                  <i class="fa fa-arrow-left"></i>
                  디아블로2 Test Case 로 돌아가기
                </Link>

                <div className="bug-report-summary">
                  <i className="fa fa-bug" aria-hidden="true"></i>
                  <span className="bug-title">BUG-D2-002</span>
                  {/* <span className="bug-status open">Oepn</span>
              <span className="bug-status high">High</span> */}
                  <span className="bug-status major">Major</span>
                </div>

                <h2 className="bug-report-title">
                  인벤토리에서 아이템 이동 후 이동한 슬롯에서 아이템을 선택할 수
                  없는 현상
                </h2>

                <div className="bug-report-meta">
                  <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="meta-title">작성자</span>
                    <span className="divider">|</span>
                    <span className="meta-value">KIM QA</span>
                  </div>
                  <div>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="meta-title">작성일</span>
                    <span className="divider">|</span>
                    <span className="meta-value">2026-06-05</span>
                  </div>

                  <div>
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <span className="meta-title">라벨</span>
                    <span className="divider">|</span>
                    <span className="meta-value">
                      UI, 인벤토리, 아이템 이동
                    </span>
                  </div>
                </div>
              </header>
              {/* bug-report-header 끝 */}
              {/* bug-report-content-wrap 시작 */}
              <div className="bug-report-content-wrap">
                <div className="bug-report-content">
                  <div className="content-box summary-box">
                    <h4>1. 상세 내용</h4>
                    <p className="content-txt">
                      인벤토리에서 아이템을 빈 슬롯으로 이동하면 화면상으로는
                      아이템이 정상적으로 이동한 것처럼 표시된다.
                    </p>
                    <p className="content-txt">
                      하지만 실제 데이터는 기존 슬롯에 유지되어 이동한
                      슬롯에서는 아이템을 선택하거나 상호작용할 수 없다.
                    </p>
                  </div>

                  <div className="content-row">
                    <div className="content-box steps-box">
                      <h4>2. 재현 단계</h4>
                      <ul>
                        <li>
                          <span className="step-num">1</span>
                          캐릭터 인벤토리 오픈
                        </li>
                        <li>
                          <span className="step-num">2</span>
                          임의 아이템 선택
                        </li>
                        <li>
                          <span className="step-num">3</span>빈 슬롯으로 아이템
                          이동
                        </li>
                        <li>
                          <span className="step-num">4</span>
                          이동한 슬롯의 아이템 클릭
                        </li>
                      </ul>
                    </div>
                    <div className="content-box expected-box">
                      <h4>3. 기대 결과</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check expected-icon"></i>
                          아이템 이동 후 이동한 슬롯에서 아이템을 정상적으로
                          선택할 수 있어야 한다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-box actual-box">
                    <h4>4. 실제 결과</h4>
                    <ul>
                      <li>
                        <i className="fa fa-times actual-icon"></i>
                        아이템 이동 후 이동한 슬롯의 아이템을 선택하거나
                        상호작용할 수 없다.
                      </li>
                    </ul>
                  </div>
                  <div className="content-box attachments-box">
                    <h4>5. 첨부 파일</h4>
                    <ul>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/d2/actual_02-01.jpg",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/d2/actual_02-01.jpg" />
                        </div>
                        <span className="title-attachments">
                          아이템 이동 후.jpg
                        </span>
                      </li>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/d2/expected_02-01.jpg",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/d2/expected_02-01.jpg" />
                        </div>
                        <span className="title-attachments">정상 작동.jpg</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bug-report-info">
                  <div className="content-box environment-box">
                    <h4>6. 환경 정보</h4>
                    <ul>
                      <li>
                        <span className="title-environment">버전</span>
                        <span>3.2.92777</span>
                      </li>
                      <li>
                        <span className="title-environment">플랫폼</span>
                        <span>PC</span>
                      </li>

                      <li>
                        <span className="title-environment">OS</span>
                        <span>Windows 11 Pro(25H2)</span>
                      </li>
                      <li>
                        <span className="title-environment">해상도</span>
                        <span>1920 * 1080</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content-box frequency-box">
                    <h4>7. 발생 빈도</h4>
                    <p className="frequency-value">
                      <i className="fa fa-clock-o icon-value"></i>
                      Always
                    </p>
                    <p className="frequency-desc">
                      모든 테스트 환경에서 항상 재현됩니다
                    </p>
                  </div>
                  <div className="content-box priority-box">
                    <h4>8. 심각도</h4>

                    <div className="priority-wrap">
                      <div className="priority-item">
                        <p className="priority-value">
                          <i className="fa fa-plus-circle icon-priority-down major"></i>
                          Major
                        </p>
                        <p className="priority-desc">주요 기능 영향</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-box related-tc-box">
                    <h4>9. 관련 테스트 케이스</h4>

                    <Link to="/BugReport/diablo-01" className="related-tc-link">
                      BUG-D2-001
                      <i className="fa fa-external-link icon-related"></i>
                    </Link>

                    <p className="related-tc-desc">
                      인벤토리에서 아이템 이동 후 기존 슬롯에 아이템 이미지가
                      남아있는 현상
                    </p>
                  </div>
                </div>
              </div>
              {/* bug-report-content-wrap 끝 */}
            </article>
          )}
          {bugType === "diablo-03" && (
            <article className="bug-report-card">
              {/* bug-report-header 시작 */}
              <header className="bug-report-header">
                <Link className="page-back-link" to="/testcase/diablo2">
                  <i class="fa fa-arrow-left"></i>
                  디아블로2 Test Case 로 돌아가기
                </Link>

                <div className="bug-report-summary">
                  <i className="fa fa-bug" aria-hidden="true"></i>
                  <span className="bug-title">BUG-D2-003</span>
                  {/* <span className="bug-status open">Oepn</span>
              <span className="bug-status high">High</span> */}
                  <span className="bug-status minor">Minor</span>
                </div>

                <h2 className="bug-report-title">
                  방어구 종류별 전용 툴팁 정보가 간헐적으로 표시되지 않는 현상
                </h2>

                <div className="bug-report-meta">
                  <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="meta-title">작성자</span>
                    <span className="divider">|</span>
                    <span className="meta-value">KIM QA</span>
                  </div>
                  <div>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="meta-title">작성일</span>
                    <span className="divider">|</span>
                    <span className="meta-value">2026-06-05</span>
                  </div>

                  <div>
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <span className="meta-title">라벨</span>
                    <span className="divider">|</span>
                    <span className="meta-value">
                      UI, 인벤토리, 툴팁, 방어구
                    </span>
                  </div>
                </div>
              </header>
              {/* bug-report-header 끝 */}
              {/* bug-report-content-wrap 시작 */}
              <div className="bug-report-content-wrap">
                <div className="bug-report-content">
                  <div className="content-box summary-box">
                    <h4>1. 상세 내용</h4>
                    <p className="content-txt">
                      인벤토리에서 방패 또는 벨트에 마우스를 오버했을 때
                      출력되는 툴팁에서 방어구 종류에 따라 표시되어야 하는 전용
                      정보가 간헐적으로 출력되지 않는다.
                    </p>
                    <p className="content-txt">
                      방패 툴팁에서는 '막기 확률', 벨트 툴팁에서는 '허리띠 크기'
                      정보가 출력되지 않는다.
                    </p>
                  </div>

                  <div className="content-row">
                    <div className="content-box steps-box">
                      <h4>2. 재현 단계</h4>
                      <ul>
                        <li>
                          <span className="step-num">1</span>
                          캐릭터 인벤토리 오픈
                        </li>
                        <li>
                          <span className="step-num">2</span>
                          방패와 벨트에 마우스를 번갈아 여러 차례 오버
                        </li>
                        <li>
                          <span className="step-num">3</span>
                          툴팁의 내용 확인
                        </li>
                        <li>
                          <span className="step-num">4</span>
                          2~3단계를 여러 차례 반복
                        </li>
                        <li>
                          <span className="step-num">5</span>
                          툴팁의 내용 재확인
                        </li>
                      </ul>
                    </div>
                    <div className="content-box expected-box">
                      <h4>3. 기대 결과</h4>
                      <ul>
                        <li>
                          <i className="fa fa-check expected-icon"></i>
                          방패의 툴팁에 '막기 확률' 정보가 표시되어야 한다.
                        </li>
                        <li>
                          <i className="fa fa-check expected-icon"></i>
                          벨트의 툴팁에 '허리띠 크기' 정보가 표시되어야 한다.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-box actual-box">
                    <h4>4. 실제 결과</h4>
                    <ul>
                      <li>
                        <i className="fa fa-times actual-icon"></i>
                        방패의 툴팁에 '막기 확률' 정보가 표시되지 않는다.
                      </li>
                      <li>
                        <i className="fa fa-times actual-icon"></i>
                        벨트의 툴팁에 '허리띠 크기' 정보가 표시되지 않는다.
                      </li>
                    </ul>
                  </div>
                  <div className="content-box attachments-box">
                    <h4>5. 첨부 파일</h4>
                    <ul>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/d2/actual_03-01.jpg",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/d2/actual_03-01.jpg" />
                        </div>
                        <span className="title-attachments">버그 화면.jpg</span>
                      </li>
                      <li
                        onClick={() =>
                          setSelectedImage(
                            "/images/bugReport/d2/expected_03-01.jpg",
                          )
                        }
                      >
                        <div className="img-attachments-box">
                          <img src="/images/bugReport/d2/expected_03-01.jpg" />
                        </div>
                        <span className="title-attachments">정상 화면.jpg</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bug-report-info">
                  <div className="content-box environment-box">
                    <h4>6. 환경 정보</h4>
                    <ul>
                      <li>
                        <span className="title-environment">버전</span>
                        <span>3.2.92777</span>
                      </li>
                      <li>
                        <span className="title-environment">플랫폼</span>
                        <span>PC</span>
                      </li>

                      <li>
                        <span className="title-environment">OS</span>
                        <span>Windows 11 Pro(25H2)</span>
                      </li>
                      <li>
                        <span className="title-environment">해상도</span>
                        <span>1920 * 1080</span>
                      </li>
                    </ul>
                  </div>
                  <div className="content-box frequency-box">
                    <h4>7. 발생 빈도</h4>
                    <p className="frequency-value">
                      <i className="fa fa-clock-o icon-value"></i>
                      Sometimes
                    </p>
                    <p className="frequency-desc">
                      방패와 벨트를 반복해서 확인하는 과정에서 간헐적 재현
                    </p>
                  </div>
                  <div className="content-box priority-box">
                    <h4>8. 심각도</h4>

                    <div className="priority-wrap">
                      <div className="priority-item">
                        <p className="priority-value">
                          <i className="fa fa-plus-circle icon-priority-down miner"></i>
                          Minor
                        </p>
                        <p className="priority-desc">제한적 영향</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-box related-tc-box">
                    <h4>9. 관련 테스트 케이스</h4>

                    {/* <Link to="/BugReport/diablo-01" className="related-tc-link">
                      관련 테스트 케이스 없음
                      <i className="fa fa-external-link icon-related"></i>
                    </Link> */}

                    <p className="related-tc-desc">관련 테스트 케이스 없음</p>
                  </div>
                </div>
              </div>
              {/* bug-report-content-wrap 끝 */}
            </article>
          )}
        </div>
      </section>
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content">
            <img src={selectedImage} alt="" />
            <p className="modal-guide">이미지나 빈 공간을 클릭하면 닫힙니다.</p>
          </div>
        </div>
      )}
    </main>
  );
}
export default BugReport;
