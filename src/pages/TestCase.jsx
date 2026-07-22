import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/testcase.css";
import TestSample from "../components/TestSample";

function TestCase() {
  const [testStatus, setTestStatus] = useState({
    total: 0,
    pass: 0,
    fail: 0,
    na: 0,
    googlesheet: "",
  });

  return (
    <main className="test-case-page">
      {/* 테스트 케이스 섹션 시작 */}
      <section className="test-case-section section">
        <div className="container">
          <div className="test-case-header">
            <Link className="page-back-link" to="/project">
              <i class="fa fa-arrow-left"></i>
              Work 페이지로 돌아가기
            </Link>
            <h2>TestCase</h2>
            <p>총 {testStatus.total}개의 테스트 케이스가 있습니다.</p>
            <p>
              본 테스트 결과는 포트폴리오 시연을 위해 구성한 예시 데이터이며,
              실제 서비스의 운영 상태와는 무관합니다.
            </p>
          </div>
          <div className="test-case-table-box">
            <div className="test-case-status">
              <span className="status-total">전체 {testStatus?.total}</span>
              <span className="status-pass">Pass {testStatus?.pass}</span>
              <span className="status-fail">Fail {testStatus?.fail}</span>
              <span className="status-na">N/A {testStatus?.na}</span>
              <span className="status-gsheet">
                <a href={testStatus?.googlesheet} target="_blank">
                  <i class="fa fa-file-text-o"></i> Google Sheet 로 보기
                </a>
              </span>
            </div>

            <div className="tc-wrap">
              <TestSample setTestStatus={setTestStatus} />
            </div>
          </div>
        </div>
      </section>
      {/* 테스트 케이스 섹션 끝 */}
    </main>
  );
}
export default TestCase;
