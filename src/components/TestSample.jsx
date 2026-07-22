import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function TestSample({ setTestStatus }) {
  const { type } = useParams();
  const location = useLocation();
  const tutorial = location.state?.tutorial ?? false;
  const tutorialRef = useRef();

  const [showTooltip, setShowTooltip] = useState(tutorial);
  const [fadeOut, setFadeOut] = useState(false);

  console.log("파람", type, "로케이션", location);
  const testSummary = {
    toss: {
      total: 34,
      pass: 32,
      fail: 2,
      na: 0,
      googlesheet:
        "https://docs.google.com/spreadsheets/d/14ZIN7I5MCGffY7UZUx6NhjRUo9XX5k-U-z_grrx-kaM/edit?usp=sharing",
    },
    diablo2: {
      total: 66,
      pass: 64,
      fail: 2,
      na: 0,
      googlesheet:
        " https://docs.google.com/spreadsheets/d/1eyZ30AOOf3nPAh101bxF1rC_KpCQyxI61fh3pg5ZJ4w/edit?usp=sharing ",
    },
  };

  useEffect(() => {
    setTestStatus(testSummary[type]);
  }, [type]);

  useEffect(() => {
    if (tutorial) {
      tutorialRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [tutorial]);

  const handleTutorialClose = () => {
    if (!showTooltip) return;

    setFadeOut("hide");
    setTimeout(() => {
      setShowTooltip(false);
    }, 6000);
  };

  return (
    <table className="tase-case-table">
      <colgroup>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
      </colgroup>
      <thead>
        <tr>
          <th className="col-no">No</th>
          <th className="col-depth">Depth1</th>
          <th className="col-depth">Depth2</th>
          <th className="col-depth"> Depth3</th>
          <th className="col-depth">Depth4</th>
          <th>사전 조건</th>
          <th className="col-step">스탭</th>
          <th>기대 결과</th>
          <th className="col-import">
            중<br />요<br />도
          </th>
          <th>실제 결과</th>
          <th className="col-status">상태</th>
          <th className="col-bug">버그리포트</th>
        </tr>
      </thead>
      {type === "toss" && (
        <tbody>
          <tr>
            <td className="col-no">1</td>
            <td rowSpan="34" className="depth1">
              메인홈
            </td>
            <td rowSpan="21" className="depth2">
              실시간 차트
            </td>
            <td rowSpan="6" className="depth3">
              필터
            </td>
            <td></td>
            <td></td>
            <td>메인홈 진입</td>
            <td>
              - 실시간 차트 영역이 출력되어야 한다.
              <br />- 국가, 카테고리, 기간 필터가 노출되어야 한다.
              <br />- 실시간 차트 종목 리스트가 출력되어야 한다.
              <br />- 투자위험 주식 숨기기 버튼이 노출되어야 한다.
            </td>
            <td className="col-import">p0</td>
            <td>
              - 실시간 차트 영역 출력
              <br />- 국가, 카테고리, 기간 필터 노출
              <br />- 실시간 차트 종목 리스트 출력
              <br />- 투자위험 주식 숨기기 버튼 노출
            </td>
            <td className="status-fail">Fail</td>
            <td className={tutorial ? "toturial-focus" : ""}>
              {showTooltip && (
                <div
                  className={`${fadeOut ? "hide" : ""} test-case-tutorial-tooltip`}
                >
                  버그 리포트를 선택하여 상세 내용을 확인해보세요.
                  <i class="fa fa-arrow-down"></i>
                </div>
              )}
              <Link
                to="/BugReport/toss-01"
                className="btn-bug-report"
                ref={tutorialRef}
                onMouseEnter={handleTutorialClose}
              >
                <i className="fa fa-share-square-o"></i>BUG-CHART-001
              </Link>
            </td>
          </tr>
          <tr>
            <td className="col-no">2</td>
            <td>카테고리 필터</td>
            <td></td>
            <td>카테고리 필터의 정렬 버튼 선택</td>
            <td>
              선택한 카테고리 필터 기준으로 실시간 차트 리스트가 정렬되어야
              한다.
              <br />- 토스증권 거래대금 <br />- 토스증권 거래량
              <br />- 거래대금 <br />- 거래량 <br />- 급상승
              <br />- 급하락
            </td>
            <td className="col-import">p1</td>
            <td>
              선택한 카테고리 필터 기준으로 실시간 차트 리스트가 정렬된다.
              <br />
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">3</td>
            <td>국가 필터</td>
            <td></td>
            <td>국가 필터의 정렬 버튼 선택</td>
            <td>
              선택한 국가 필터 기준으로 실시간 차트 리스트가 정렬되어야 한다.
              <br />- 국내
              <br />- 해외
            </td>
            <td className="col-import">p1</td>
            <td>
              선택한 국가 필터 기준으로 실시간 차트 리스트가 <br />
              정렬된다.
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">4</td>
            <td>기간 필터</td>
            <td></td>
            <td>기간 필터의 정렬 버튼 선택</td>
            <td>
              선택한 필터 기준으로 실시간 차트 리스트가 정렬되어야 한다.
              <br />- 실시간
              <br />- 1일, 1주일, 1/3/6개월, 1년
            </td>
            <td className="col-import">p1</td>
            <td>
              선택한 기간 필터 기준으로 실시간 차트 리스트가 <br />
              정렬된다.
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">5</td>
            <td rowSpan="2">투자위험 주식 숨기기</td>
            <td></td>
            <td>- '투자위험 주식 숨기기'버튼 선택</td>
            <td>
              - 투자위험 종목이 실시간 차트 리스트에서 미출력되어야 한다.
              <br />- '투자위험 주식 숨기기' 버튼의 아이콘 및 텍스트가
              파란색으로 변경되어야한다.
            </td>
            <td className="col-import">p2</td>
            <td>
              - 투자위험 종목이 실시간 차트 리스트에서 미출력 된다.
              <br />- '투자위험 주식 숨기기' 버튼의 아이콘, 텍스트가 파란색으로
              변경
            </td>
            <td className="status-fail">Fail</td>
            <td>
              <Link to="/BugReport/toss-02" className="btn-bug-report">
                <i className="fa fa-share-square-o"></i>BUG-CHART-002
              </Link>
            </td>
          </tr>
          <tr>
            <td className="col-no">6</td>
            <td>
              투자 위험 주식 숨기기' 기능이 <br />
              활성화된 상태
            </td>
            <td>
              - 활성 상태의 '투자위험 주식 숨기기'
              <br />
              버튼 선택
            </td>
            <td>
              - 투자위험 종목이 실시간 차트 리스트에 출력되어야 한다.
              <br />- '투자위험 주식 숨기기' 버튼의 아이콘 및 텍스트가 회색으로
              변경되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>
              - 투자위험 종목이 실시간 차트 리스트에서 출력 된다
              <br />- '투자위험 주식 숨시기' 버튼의 아이콘, 텍스트가 회색으로
              변경
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">7</td>
            <td rowSpan="9" className="depth3">
              종목 리스트
            </td>
            <td></td>
            <td></td>
            <td>실시간 차트 종목 영역 선택</td>
            <td>- 선택한 종목 상세 페이지 이동</td>
            <td className="col-import">p2</td>
            <td>- 선택한 종목 상세 페이지 이동</td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">8</td>
            <td>현재가 컬럼</td>
            <td></td>
            <td>종목 리스트의 현재가 값 확인</td>
            <td>
              각 종목의 현재가가 아래 규칙에 따라 출력되어야 한다.
              <br />- 3자리마다 ','가 적용어야 한다.
              <br />- '원' 단위로 표시되어야 한다.
            </td>
            <td className="col-import">p0</td>
            <td>
              현재가 규칙이 적용되어 출력된다.
              <br />- 130,580원
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">9</td>
            <td>등락률 컬럼</td>
            <td></td>
            <td>종목 리스트의 등락률 값 확인</td>
            <td>
              각 종목의 등락률이 아래 규칙에 따라 출력되어야 한다.
              <br />
              <br />
              &lt;공통&gt;
              <br />- 등락률 값에 '%' 로 표시해야한다.
              <br />
              <br />
              &lt;상승&gt;
              <br />- 값 앞에 '+'가 표시되어야 한다.
              <br />- #f04452 색상으로 표시되어야 한다.
              <br />
              <br />
              &lt;하락&gt;
              <br />- 값 앞에 '-'가 표시되어야 한다.
              <br />- #3182f6 색상으로 표시되어야 한다.
              <br />
              <br />
              &lt;보합&gt;
              <br />- 부호 없이 표시되어야 한다.
              <br />- #6b7684 색상으로 표시되어야 한다.
            </td>
            <td className="col-import">p0</td>
            <td>
              등락률 규칙이 적용되어 출력된다.
              <br />- 상승: +1.84% 빨간색
              <br />- 하락: -1.84% 파란색
              <br />- 보합: 0.00% 회색
              <br />
              <br />
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">10</td>
            <td>거래대금 컬럼</td>
            <td></td>
            <td>종목 리스트의 거래대금 값 확인</td>
            <td>
              각 종목의 거래대금이 아래 규칙에 따라 출력되어야 한다.
              <br />- 단위 기준에 따라 '만원', '억원', '조원 '으로 표시
              <br />- '10억' 미만의 '억원 '단위는 소수점 첫째 자리까지 표시
              <br />- '10억' 이상의 '억원' 단위는 수수점 없이 표시
              <br />- '조원' 단위는 소수점 첫째 자리까지 표시
              <br />- '만원' 단위는 소수점 없이 표시
            </td>
            <td className="col-import">p2</td>
            <td>
              거래대금 규칙이 적용되어 출력된다.
              <br />- 1,100.4조원
              <br />- 123억원
              <br />- 8.1억원
              <br />- 1,978만원
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">11</td>
            <td>토스증권 거래 비율 컬럼</td>
            <td></td>
            <td>
              종목 리스트의 토스증권 거래 <br />
              비율 값 확인
            </td>
            <td>
              - 매수/매도 비율 값이 숫자로 표시되어야 한다.
              <br />- 매수/매도 비율의 합은 100으로 표시되어야 한다.
              <br />- 매수 비율을 빨간색으로 표시되어야 한다.
              <br />- 매도 비율은 파란색으로 표시되어야 한다.
              <br />- 데이터가 없을 경우 회색 막대 및 '-' 로 표시되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>
              토스증권 거래 비율 규칙에 따라 출력된다.
              <br />- 매도 44(파란색) / 매수 56(빨간색)
              <br />- 데이터 없음 상태에서 회색 막대 및 '-'{" "}
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">12</td>
            <td>토스증권 AI 요약</td>
            <td></td>
            <td>
              종목 리스트의 토스증권 AI 요약
              <br />값 확인
            </td>
            <td>
              각 종목의 토스증권 AI 요약이 아래 규칙에 따라 출력되어야 한다.
              <br />- 종목별 AI 요약 텍스트가 출력
              <br />- AI 요약 텍스트는 뉴스 및 시장 데이터 기반 내용으로 표시
              <br />- 데이터가 없을 경우 공백으로 표시
            </td>
            <td className="col-import">p2</td>
            <td>
              토스증권 AI 요약 규칙이 적용되어 출력된다.
              <br />- 'AI 메모리 수요 급증' 출력 (기사 내용)
              <br />- 공백으로 출력 (정보 없음)
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">13</td>
            <td>토스증권 AI 요약 툴팁</td>
            <td></td>
            <td>
              토스증권 AI 요약 안내 <br />
              아이콘 마우스 오버
            </td>
            <td>
              토스증권 AI 요약 안내 아이콘에 마우스 오버시 아래 내용이 <br />
              출력되어야 한다.
              <br />- 토스증권 투자자들의 구매·판매 체결비중을 나타내요
              <br />
              ㄴ30분 이내 체결내역을 실시간으로 보여줘요.
              <br />
              ㄴ투자자들의 심리와 수급추세를 알 수 있어요. <br />
              단, 시장 전체의 수급을 의미하지 않아요.
            </td>
            <td className="col-import">p2</td>
            <td>
              안내 툴팁이 출력된다.
              <br />- 토스증권 투자자들의 구매·판매 체결비중을 나타내요
              <br />
              ㄴ30분 이내 체결내역을 실시간으로 보여줘요.
              <br />
              ㄴ투자자들의 심리와 수급추세를 알 수 있어요. <br />
              단, 시장 전체의 수급을 의미하지 않아요.
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">14</td>
            <td rowSpan="2">관심 종목 아이콘</td>
            <td>관심 그룹 리스트가 1개 일 때</td>
            <td rowSpan="2">종목 리스트의 관심 종목 아이콘 선택</td>
            <td>
              - 상단에 '기본에 추가했어요' 토스트 메세지가 출력되어야 한다.{" "}
              <br />
              - 종목 리스트의 하트가빨간색으로 변경되어야 한다.
              <br />- 내 관심 그룹 팝업창이 출력되어야 한다.
              <br />ㄴ '내 관심 그룹'타이틀 <br />ㄴ 관심 그룹 리스트 <br />ㄴ
              '+ 새 그룹 만들기' 버튼{" "}
            </td>
            <td className="col-import">p2</td>
            <td>
              - 상단에 '기본에 추가했어요' 토스트 메세지 출력
              <br />- 종목 리스트의 하트가 빨간색으로 변경
              <br />- 내 관심 그룹 팝업창 출력
              <br />ㄴ '내 관심 그룹'타이틀 출력
              <br />ㄴ 관심 그룹 리스트 출력
              <br />ㄴ '+ 새 그룹 만들기' 버튼 출력{" "}
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">15</td>
            <td>
              - 관심 그룹 리스트가 2개이상인 상태 <br />- 관심 종목으로 등록된
              상태
            </td>
            <td>
              - 내 관심 그룹 팝업창이 출력되어야 한다.
              <br />ㄴ '내 관심 그룹'타이틀 <br />ㄴ 관심 그룹 리스트 <br />ㄴ
              '+ 새 그룹 만들기' 버튼
            </td>
            <td className="col-import">p2</td>
            <td>
              - 내 관심 그룹 팝업창 출력
              <br />ㄴ '내 관심 그룹'타이틀 출력
              <br />ㄴ 관심 그룹 리스트 출력
              <br />ㄴ '+ 새 그룹 만들기' 버튼 출력
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">16</td>
            <td rowSpan="6" className="depth3">
              관심 그룹 리스트 팝업
            </td>
            <td></td>
            <td>관심 종목으로 등록된 상태</td>
            <td>팝업창의 체크 된 관심 그룹 선택</td>
            <td>
              - 상단에 '&#123;관심 그룹명&#125;에서 삭제했어요' 토스트 메세지가
              출력되어야한다.
              <br />- 종목 리스트의 하트가 회색으로 변경되어야 한다.
              <br />- 선택한 관심 그룹 항목의 체크 상태가 해제되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>
              - 상단에 '&#123;관심 그룹명&#125;에서 삭제했어요' 토스트 메시지
              출력
              <br />- 종목 리스트의 하트가 회색으로 변경
              <br />- 선택한 관심 그룹 항목 체크 상태 해제
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">17</td>
            <td></td>
            <td></td>
            <td>+ 새 그룹 만들기' 버튼 선택</td>
            <td>
              - 새 그룹 생성 팝업창이 출력되어야 한다.
              <br />- '그룹 이름 입력' 영역이 출력되어야 한다.
              <br />- "닫기", "추가하기" 버튼이 출력되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>
              - 새 그룹 생성 팝업창 출력
              <br />ㄴ '새 그룹' 타이틀 출력
              <br />ㄴ '그룹 이름 입력' 영역 출력
              <br />ㄴ '닫기', '추가하기' 버튼 출력
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">18</td>
            <td rowSpan="4">새 그룹 팝업</td>
            <td></td>
            <td>
              - 그룹 이름 입력 영역에 텍스트 입력
              <br />- 추가하기 버튼 선택
            </td>
            <td>
              - 상단에 '&#123;그룹명&#125;에 추가했어요' 토스트 메세지가
              출력되어야 한다.
              <br />- 새 그릅 생성 팝업창이 닫힌다.
              <br />- 관심 그룹 리스트에 생성한 그룹이 출력되어야 한다.
            </td>
            <td className="col-import">p1</td>
            <td>
              - 상단에 '&#123;그룹명&#125;에 추가했어요' 토스트 메세지 출력
              <br />- 새 그룹 생성 팝업 닫힘
              <br />- 관심 그룹 리스트에 생성한 &#123;그룹명&#125;이 출력
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">19</td>
            <td></td>
            <td>
              - 그룹 이름 입력 영역을 공백 상태로 유지
              <br />- '추가하기' 버튼 선택
            </td>
            <td>
              - 관심 그룹이 생성되지 않아야 한다.
              <br />- '추가하기' 버튼이 비활성 상태를 유지해야 한다.
            </td>
            <td className="col-import">p1</td>
            <td>
              - 관심 그룹이 생성되지 않음
              <br />- 추가하기 버튼 비활성 상태를 유지
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">20</td>
            <td>
              동일한 이름의 관심 그룹명이 이미
              <br />
              생성된 상태
            </td>
            <td>
              - 기존 관심 그룹 이름과 동일한 그룹명 입력
              <br />- '추가하기' 버튼 선택
            </td>
            <td>
              - 동일한 이름의 관심 그룹이 생성되어야 한다.
              <br />- 상단에 '&#123;그룹명&#125;에 추가했어요' 토스트 메세지
              출력
            </td>
            <td className="col-import">p1</td>
            <td>
              - 동일한 이름의 관심 그룹이 생성 됨<br />- 상단에
              '&#123;그룹명&#125;에 추가했어요'토스트 메세지 출력
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">21</td>
            <td></td>
            <td>
              - 그룹 이름 입력 영역에 20자를 <br />
              초과하는 텍스트를 입력
              <br />- '추가하기' 버튼 선택
            </td>
            <td>
              - 문자 타입에 관계없이 최대 20자까지만 입력되어야 한다.
              <br />- 20자를 초과한 텍스트는 입력되지 않아야 한다.
              <br />
              .- 생성된 관심 그룹명이 영역을 초과할 경우 잘려서 출력되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>
              - 문자 타입과 관계없이 최대 20자까지만 입력 됨<br />ㄴ
              ㄱㄱㄱㄱaaaa나나나나4444a나--
              <br />- 20자를 초과하는 텍스트는 입력되지 않음
              <br />- 생성된 관심 그룹명이 영역을 초과할 경우 잘려서 출력
              <br />ㄴ ㄱㄱㄱㄱaaaa나나나나44
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">22</td>
            <td rowSpan="11" className="depth2">
              우측 미리보기 영역
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>실시간 차트 종목 영역에 마우스 오버</td>
            <td>
              - 마우스 커서가 손모양으로 변경되어야 한다.
              <br />- 우측 미리보기 영역에 해당 종목의 로고, 종목명, 현재가,
              등락률 정보가 출력되어야 한다.
              <br />- 우측 미리보기 영역에 해당 종목의 차트 영역이 출력되어야
              한다.
              <br />- 우측 미리보기 영역에 해당 종목의 AI 요약 영역이 출력되어야
              한다.
              <br />- 우측 미리보기 영역에 해당 종목의 커뮤니티 영역이
              출력되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>
              - 마우스 커서 손모양 변경
              <br />- 우측 미리보기 영역에 종목 로고, 'SK하이닉스',
              '1,894,000원', '12.44%' 출력
              <br />- 우측 미리보기 영역 5분봉 차트 출력
              <br />- AI 요약 및 한 줄 요약 영역 출력
              <br />- 커뮤니티 영역 출력
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">23</td>
            <td></td>
            <td></td>
            <td>
              실시간 차트 종목 영역에 <br />
              마우스 오버 상태
            </td>
            <td>실시간 차트 종목 영역 외부로 마우스 이동</td>
            <td>
              마지막으로 마우스 오버한 종목의 우측 미리보기 영역 정보가
              유지되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>마지막으로 마우스 오버한 종목의 우측 미리보기 영역 유지</td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">24</td>
            <td></td>
            <td></td>
            <td>
              실시간 차트 종목 영역에 <br />
              마우스 오버 상태
            </td>
            <td>다른 실시간 차트 종목 영역에 마우스 오버</td>
            <td>
              우측 미리보기 영역에 마우스 오버한 종목의 정보가 출력되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>우측 미리보기 영역에 마우스 오버한 종목의 정보가 출력</td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">25</td>
            <td></td>
            <td></td>
            <td rowSpan="7">
              실시간 차트 종목 영역에 <br />
              마우스 오버 상태
            </td>
            <td>우측 미리보기 영역의 종목 영역 선택</td>
            <td>해당 종목의 상세 페이지로 이동 되어야 한다.</td>
            <td className="col-import">p2</td>
            <td>해당 종목의 상세페이지로 이동된다.</td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">26</td>
            <td></td>
            <td></td>
            <td>우측 미리보기 영역 차트에 마우스 오버</td>
            <td>
              차트 툴팁이 아래 내용으로 출력되어야 한다.
              <br />- 날짜
              <br />- 시작가, 마지막가, 최고가, 최저가 <br />- 거래량
              <br />- 등략률
            </td>
            <td className="col-import">p2</td>
            <td>
              차트 마우스 오버 시 툴팁 출력
              <br />- 2026.05.11(월) 14:20 <br />- 시작 127,500원 / 마지막
              127,650원 / 최고 127,700원 / 최저 127,500원 출력
              <br />- 거래량 42,183 / 등락률 +0.11% 출력
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">27</td>
            <td></td>
            <td></td>
            <td>
              우측 미리보기 영역 AI 요약의 <br />
              '더보기' 선택
            </td>
            <td>AI 요약 전체 내용이 출력되어야 한다.</td>
            <td className="col-import">p2</td>
            <td>AI 요약 전체 내용 출력</td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">28</td>
            <td></td>
            <td></td>
            <td>
              우측 미리보기 영역 AI 요약의 <br />
              하단 뉴스 아이콘 선택
            </td>
            <td>
              참조 뉴스 리스트가 출력되어야 한다.
              <br /> - 출처 갯수
              <br /> - 뉴스 제목 및 언론사{" "}
            </td>
            <td className="col-import">p2</td>
            <td>
              참조 뉴스 리스트가 출력 됨<br />- 28개 출처
              <br />- '[0511마감체크] 코스피, 삼전닉스 급등...' <br />-
              '인포스탁데일리 · 41분 전'{" "}
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">29</td>
            <td></td>
            <td></td>
            <td>
              우측 미리보기 영역 AI 요약의 <br />
              참조 뉴스 모달창에서 리스트 선택
            </td>
            <td>
              - 선택한 뉴스 기사가 모달창으로 출력되어야 한다.
              <br />
              ㄴ기사 제목
              <br />
              ㄴ종목 태그
              <br />
              ㄴ기사 사진
              <br />
              ㄴ기사 본문 내용
              <br />- 화면 배경에 딤드 처리가 적용되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>
              - 선택한 뉴스 기사 모달창 출력
              <br />ㄴ '[0511마감체크] 코스피, 삼전닉스 급등에 7800선 돌파...'{" "}
              <br />ㄴ ['삼성전자 +6.14%'] [DB하이텍 +10.76%]
              <br />ㄴ 기사 사진 <br />ㄴ 기사 본문 내용 <br />- 화면 배경 딤드
              처리 적용
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">30</td>
            <td></td>
            <td></td>
            <td>우측 미리보기 영역의 커뮤니티 영역 확인</td>
            <td>
              - 게시물에 아래 내용이 출력되어야 한다.
              <br />
              ㄴ 프로필 사진, 닉네임, 벳지, 작성 후 경과 시간(일/시간/분)
              <br />
              ㄴ 게시물 텍스트
              <br />
              ㄴ 게시물 사진
              <br />- 내용이 길 경우 세로 스크롤이 되어야 한다.
            </td>
            <td className="col-import">p2</td>
            <td>
              - 게시물 영역 출력 <br />ㄴ 프로필 사진, '테스트아이디', '1억대
              자산가', 9분 전' 출력 <br />ㄴ '수익 인증합니다' 텍스트 및게시물
              사진 출력
              <br /> - 커뮤니티 영역 세로 스크롤 동작 확인
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">31</td>
            <td></td>
            <td></td>
            <td>우측 미리보기 영역 커뮤니티 게시글 선택</td>
            <td>선택한 커뮤니티 게시글의 상세 페이지로 이동된다.</td>
            <td className="col-import">p2</td>
            <td>선택한 커뮤니티 게시글 상세 페이지로 이동</td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">32</td>
            <td></td>
            <td></td>
            <td>
              우측 미리보기 영역의 커뮤니티 <br />
              스크롤이 하단으로 이동된 상태
            </td>
            <td>
              실시간 차트에서 다른 종목으로 <br />
              마우스를 오버
            </td>
            <td>
              - 우측 미리보기 영역 스크롤 위치가 최상단으로 이동되어야 한다.
              <br />- 스크롤 이동시 애니메이션 효과가 적용되어야 한다.{" "}
            </td>
            <td className="col-import">p2</td>
            <td>
              현재 스크롤 위치에서 애니메이션 효과와 함께 최상단으로 이동된다.
            </td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">33</td>
            <td rowSpan="2" className="depth2">
              우측 사이드 영역
            </td>
            <td rowSpan="2" className="depth3">
              고정 메뉴바
            </td>
            <td></td>
            <td>사이드 패널 영역이 접힌 상태</td>
            <td>우측 상단 펼치기 버튼을 선택</td>
            <td>사이드 패널 영역이 왼쪽으로 펼쳐져야 한다.</td>
            <td className="col-import">p2</td>
            <td>사이드 패널 영역이 왼쪽으로 펼쳐진다.</td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">34</td>
            <td></td>
            <td>사이드 패널 영역이 펼쳐진 상태</td>
            <td>우측 상단 접기 버튼을 선택</td>
            <td>사이드 패널 영역이 왼쪽으로 접혀야 한다.</td>
            <td className="col-import">p2</td>
            <td>사이드 패널 영역이 왼쪽으로 접힌다.</td>
            <td className="status-pass">PASS</td>
            <td></td>
          </tr>
        </tbody>
      )}

      {type === "diablo2" && (
        <tbody>
          <tr>
            <td className="col-no">1</td>
            <td rowspan="21" className="depth1">
              인벤토리
            </td>
            <td rowspan="12" className="depth2">
              소지품 영역
            </td>
            <td></td>
            <td></td>
            <td>
              - 인벤토리 내 아이템이 1개 이상 존재해야 한다.
              <br />- 인벤토리 내 빈 슬롯이 존재해야 한다.
            </td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 이동할 아이템 선택
              <br />
              3. 빈 슬롯 클릭
            </td>
            <td>
              - 선택한 아이템이 지정한 빈 슬롯으로 이동되어야 한다.
              <br />- 기존 슬롯은 빈 상태로 표시되어야 한다.
            </td>
            <td>p0</td>
            <td>
              - 선택한 아이템이 지정한 빈 슬롯으로 이동됨
              <br />- 기존 슬롯은 빈 상태로 표시됨
            </td>
            <td className="status-fail">Fail</td>
            <td className={tutorial ? "toturial-focus" : ""}>
              {showTooltip && (
                <div
                  className={`${fadeOut ? "hide" : ""} test-case-tutorial-tooltip`}
                >
                  버그 리포트를 선택하여 상세 내용을 확인해보세요.
                  <i class="fa fa-arrow-down"></i>
                </div>
              )}
              <div className="link-wrap">
                <Link
                  to="/BugReport/diablo-01"
                  className="btn-bug-report"
                  ref={tutorialRef}
                  onMouseEnter={handleTutorialClose}
                >
                  <i className="fa fa-share-square-o"></i>BUG-D2-001
                </Link>
                <Link
                  to="/BugReport/diablo-02"
                  className="btn-bug-report"
                  ref={tutorialRef}
                  onMouseEnter={handleTutorialClose}
                >
                  <i className="fa fa-share-square-o"></i>BUG-D2-002
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="col-no">2</td>
            <td></td>
            <td></td>
            <td>- 인벤토리 내 아이템이 2개 이상 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 이동할 아이템 선택
              <br />
              3. 다른 아이템이 위치한 슬롯 클릭
            </td>
            <td>
              - 선택한 아이템이 대상 슬롯으로 이동되어야 한다.
              <br />- 대상 슬롯의 기존 아이템은 마우스 커서에 선택된 상태가
              되어야 한다.
            </td>
            <td>p1</td>
            <td>
              - 선택한 아이템이 대상 슬롯으로 이동됨
              <br />- 대상 슬롯의 기존 아이템은 마우스 커서에 선택된 상태가 됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">3</td>
            <td></td>
            <td></td>
            <td>- 인벤토리 내 아이템이 1개 이상 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 이동할 아이템 선택
              <br />
              3. 기존 위치의 슬롯 클릭
            </td>
            <td>- 선택한 아이테은 기존 위치 슬롯에 배치되어야 한다.</td>
            <td>p2</td>
            <td>- 선택한 아이템은 기존 위치 슬롯에 배치됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">4</td>
            <td></td>
            <td></td>
            <td>- 인벤토리 내 아이템이 1개 이상 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 이동할 아이템 선택
              <br />
              3. 필드 영역 클릭
            </td>
            <td>
              - 선택한 아이템이 필드에 드롭되어야 한다.
              <br />- 인벤토리에서 선택한 아이템이 제거되어야 한다.
            </td>
            <td>p1</td>
            <td>
              - 선택한 아이템이 필드에 드롬됨
              <br />- 인벤토리에서 선택한 아이템이 제거됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">5</td>
            <td className="depth3">무기</td>
            <td></td>
            <td>- 인벤토리 내 무기가 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 무기에 마우스 오버
            </td>
            <td>
              - 선택한 무기의 정보 툴팁이 아래 내용으로 노출되어야 한다.
              <br />
              ㄴ 아이템명
              <br />
              ㄴ 피해량
              <br />
              ㄴ 공격 속도
              <br />
              ㄴ 내구도 <br />
              ㄴ 요구 능력치
              <br />
              ㄴ 요구 레벨 <br />ㄴ 고유 옵션
            </td>
            <td>p2</td>
            <td>
              - 선택한 무기의 정보 툴팁이 아래 내용으로 노출됨
              <br />
              ㄴ 재앙의 맹약자 크리스
              <br />
              ㄴ 한손 피해: 2 ~ 36
              <br />
              ㄴ 단도 계열 - 매우 빠른 공격 속도
              <br />
              ㄴ 내구도 : 18 / 24
              <br />
              ㄴ 필요 민첩: 42
              <br />
              ㄴ 요구 레벨: 8<br />ㄴ 고유 옵션 출력
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">6</td>
            <td className="depth3">방어구</td>
            <td></td>
            <td>- 인벤토리 내 방어구가 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 방어구에 마우스 오버
            </td>
            <td>
              - 선택한 방어구의 정보 툴팁이 아래 내용으로 노출되어야 한다.
              <br />
              ㄴ 아이템명
              <br />
              ㄴ 방어력
              <br />
              ㄴ 아이템 유형별 추가 정보
              <br />
              * 방패 : 막기 확률
              <br />
              * 벨트 : 허리띠 크기
              <br />
              ㄴ 내구도
              <br />
              ㄴ 요구 능력치 (존재시)
              <br />
              ㄴ 요구 레벨 (존재시)
              <br />ㄴ 고유 옵션 (존재시)
            </td>
            <td>p2</td>
            <td>
              - 선택한 방어구의 정보 툴팁이 아래 내용으로 노출됨
              <br />
              <br />
              &lt;유황석 보호구 오래된 책&gt;
              <br />
              ㄴ 방어력 : 8<br />
              ㄴ 막기 확률: 38%' <br />
              ㄴ 필요 힘: 10
              <br />
              ㄴ 요구 레벨 : 18
              <br />
              ㄴ 고유 옵션 출력
              <br />
              <br />
              &lt;재앙의 권위 라이트 벨트&gt;
              <br />
              ㄴ 방어력 : 3<br />
              ㄴ허리띠 크기: +4칸
              <br />
              ㄴ 내구도 : 8 / 20
              <br />
              ㄴ 요구 레벨 : 8<br />ㄴ 고유 옵션 출력
            </td>
            <td className="status-pass">Pass</td>
            <td>
              <div className="link-wrap">
                <Link to="/BugReport/diablo-03" className="btn-bug-report">
                  <i className="fa fa-share-square-o"></i>BUG-D2-003
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td className="col-no">7</td>
            <td className="depth3">장신구</td>
            <td></td>
            <td>- 인벤토리 내 장신구가 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 장신구에 마우스 오버
            </td>
            <td>
              - 선택한 장신구의 정보 툴팁이 아래 내용으로 노출되어야 한다.
              <br />
              ㄴ 아이템명
              <br />
              ㄴ 요구 레벨
              <br />ㄴ 고유 옵션
            </td>
            <td>p2</td>
            <td>
              - 선택한 장신구의 정보 툴팁이 아래 내용으로 노출됨
              <br />
              ㄴ 망령 손길 반지
              <br />
              ㄴ 요구 레벨 : 16
              <br />ㄴ 고유 옵션 출력
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">8</td>
            <td className="depth3">차암</td>
            <td></td>
            <td>- 인벤토리 내 차암이 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 차암에 마우스 오버
            </td>
            <td>
              - 선택한 장신구의 정보 툴팁이 아래 내용으로 노출되어야 한다.
              <br />
              ㄴ 아이템명
              <br />
              ㄴ 참 아이템 고유 효과 안내 문구
              <br />
              ㄴ 요구 레벨
              <br />ㄴ 고유 옵션
            </td>
            <td>p2</td>
            <td>
              - 선택한 차암의 정보 툴팁이 아래 내용으로 노출됨
              <br />
              ㄴ 욕심의 철의 거대 부적
              <br />
              ㄴ 소지품에 보관 시 보너스 획득
              <br />
              ㄴ 요구 레벨 : 16
              <br />ㄴ 고유 옵션 출력
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">9</td>
            <td className="depth3">포션</td>
            <td></td>
            <td>- 인벤토리 내 사용 가능한 포션이 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 포션 우클릭
            </td>
            <td>
              - 선택한 포션이 사용되어야 한다.
              <br />- 인벤토리에서 선택한 포션이 제거되어야 한다.
            </td>
            <td>p0</td>
            <td>
              - 선택한 포션이 사용됨
              <br />- 인벤토리에서 선택한 포션 제거됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">10</td>
            <td className="depth3">타운포탈책</td>
            <td></td>
            <td>
              - 캐릭터가 마을이 아닌 전투 지역인 상태여야 한다.
              <br />- 인벤토리 내 사용 가능한 타운포탈책이 존재해야 한다.
            </td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 타운포탈책 우클릭
            </td>
            <td>
              - 마을 차원문이 생성되어야 한다.
              <br />- 타운포탈책의 수량이 1개 차감되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 마을 차원문 생성됨
              <br />- 타운포탈책 수량: 15/20 → 14/20 감소됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">11</td>
            <td rowspan="2" className="depth3">
              아이템 식별책
            </td>
            <td></td>
            <td>- 인벤토리 내 사용 가능한 아이템 식별책이 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 아이템 식별책 우클릭
            </td>
            <td>
              - 마우스 커서가 식별 상태로 변경되어야 한다.
              <br />- 아이템 식별책 수량은 차감되지 않아야 한다.
            </td>
            <td>p2</td>
            <td>
              - 마우스 커서가 식별 상태로 변경 됨 <br />- 아이템 식별책 수량 :
              15/20 →15/20 유지됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">12</td>
            <td></td>
            <td>
              - 인벤토리 내 사용 가능한 아이템 식별책이 존재해야 한다.
              <br />- 인벤토리 내 미확인 된 아이템이 존재해야 한다.
            </td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 아이템 식별책 우클릭
              <br />
              3. 미감별된 아이템 클릭
            </td>
            <td>
              - 마우스 커서가 손 모양으로 변경되어야 한다.
              <br />- 미감별 아이템의 고유 옵션이 노출되어야 한다.
              <br />- 아이템 식별책 수량이 1개 차감되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 마우스 커서가 손 모양으로 변경 됨<br />- 미감별 아이템의 고유
              옵션이 노출됨
              <br />- 아이템 식별책 수량 : 15/20 →14/20 감소됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">13</td>
            <td rowspan="7" className="depth2">
              장비 영역
            </td>
            <td rowspan="7" className="depth3">
              장비 공통
            </td>
            <td></td>
            <td>
              - 인벤토리 내 장착 가능한 장비가 존재해야 한다.
              <br />- 장비 슬롯이 비어 있어야 한다.
            </td>
            <td>
              1. 인벤토리 오픈 <br />
              2. 장비 선택
              <br />
              3. 장비 슬롯 클릭
            </td>
            <td>
              - 선택한 장비가 해당 장비 슬롯에 장착되어야 한다.
              <br />- 선택한 장비가 소지품 영역에서 제거되어야 한다.
            </td>
            <td>p0</td>
            <td>
              - 선택한 장비가 해당 장비 슬롯에 장착됨
              <br />- 선택한 장비가 소지품 영역에서 제거됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">14</td>
            <td></td>
            <td>
              - 장비 슬롯에 장착된 장비가 존재해야 한다.
              <br />- 소지품 영역에 빈 슬롯이 존재해야 한다.
            </td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 장착된 장비 선택
              <br />
              3. 소지품 영역 빈 슬롯으로 이동
            </td>
            <td>
              - 선택한 장비가 장비 슬롯에서 해제되어야 한다.
              <br />- 선택한 장비가 소지품 영역에 배치되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 선택한 장비가 장비 슬롯에서 해제됨
              <br />- 선택한 장비가 소지품 영역에 배치됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">15</td>
            <td></td>
            <td>
              - 장비 슬롯에 장비가 장착되어 있어야 한다.
              <br />- 소지품 영역에 장비 크기에 맞는 빈 공간이 존재해야 한다.
            </td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 장착된 장비에 Shift + 좌클릭
            </td>
            <td>
              - 선택한 장비가 장비 슬롯에서 해제되어야 한다.
              <br />- 선택한 장비가 소지품 영역의 빈 공간에 자동 배치되어야
              한다.
            </td>
            <td>p0</td>
            <td>
              - 선택한 장비가 장비 슬롯에서 해제됨
              <br />- 선택한 장비가 소지품 영역의 빈 공간에 자동 배치됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">16</td>
            <td></td>
            <td>
              - 장비 슬롯에 장비가 장착되어 있어야 한다.
              <br />- 소지품 영역에 장비 크기에 맞는 빈 공간이 존재하지 않아야
              한다.
            </td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 장착된 장비에 Shift + 좌클릭
            </td>
            <td>- 선택한 장비가 장비 슬롯에서 해제되지 않아야 한다.</td>
            <td>p2</td>
            <td>- 선택한 장비가 장비 슬롯에 유지됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">17</td>
            <td></td>
            <td>- 요구 조건을 충족하지 못하는 장비가 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 장비 선택
              <br />
              3. 해당 장비 슬롯 클릭
            </td>
            <td>
              - 선택한 장비가 장비 슬롯에 장착되지 않고 커서에 유지되어야 한다.
            </td>
            <td>p2</td>
            <td>- 선택한 장비가 장비 슬롯에 장착되지 않고 커서에 유지됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">18</td>
            <td></td>
            <td>- 무기 세트 I, II에 각각 장비가 장착되어 있어야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. W 키 입력
            </td>
            <td>
              - 무기/방패가 전환되어야 한다.
              <br />- 무기 슬롯에 세트 II 장비가 표시되어야 한다.
              <br />- 방패 슬롯에 세트 II 장비가 표시되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 무기/방패가 전환 되었다.
              <br />- 무기 슬롯에 세트II 장비가 표시됨
              <br />- 방패 슬롯에 세트 II 장비가 표시됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">19</td>
            <td></td>
            <td>- 장비의 내구도가 0 인 상태여야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 장비 선택
              <br />
              3. 해당 장비 슬롯 클릭
            </td>
            <td>
              - 내구도 0 장비가 장비 슬롯에 장착되어야 한다.
              <br />- 해당 장비 슬롯 배경색이 빨간색으로 노출되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 내구도 0 장비가 장비 슬롯에 장착됨
              <br />- 해당 장비 슬롯 배경색이 빨간색으로 노출됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">20</td>
            <td rowspan="2" className="depth2">
              공통 영역
            </td>
            <td></td>
            <td></td>
            <td>- 장비 슬롯에 장비가 장착되어 있어야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 장착된 장비 선택
              <br />
              3. ESC키 입력
            </td>
            <td>
              - 인벤토리 창이 닫혀야 한다.
              <br />- 선택한 장비는 마우스 커서에 유지되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 인벤토리 창이 닫힘 <br />- 선택한 장비가 마우스 커서에 유지됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">21</td>
            <td></td>
            <td></td>
            <td>- 장비의 타입이 에테리얼이어야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 소지품, 장비 슬롯 영역 확인
            </td>
            <td>
              - 소지품 영역의에테리얼 장비 외형이 반투명하게 노출되어야 한다.
              <br />- 장비슬롯 영역의에테리얼 장비 외형이 반투명하게 노출되어야
              한다.
            </td>
            <td>p2</td>
            <td>
              - 소지품 영역의 에테리얼 장비 외형이 반투명하게 노출됨
              <br />- 장비슬롯 영역의 에테리얼 장비 외형이 반투명하게 노출됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">22</td>
            <td rowspan="37" className="depth1">
              캐릭터
            </td>
            <td rowspan="7" className="depth2">
              외형
            </td>
            <td className="depth3">무기</td>
            <td></td>
            <td>- 장착 가능한 무기가 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 무기 장착
              <br />
              3. 캐릭터 외형 확인
            </td>
            <td>- 장착한 무기 외형이 캐릭터 오른손에 반영되어야 한다.</td>
            <td>p2</td>
            <td>- 장착한 무기 외형이 캐릭터 오른손에 반영됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">23</td>
            <td className="depth3">방패</td>
            <td></td>
            <td>- 장착 가능한 방패가 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 방패 장착
              <br />
              3. 캐릭터 외형 확인
            </td>
            <td>- 장착한 방패 외형이 캐릭터 왼손에 반영되어야 한다.</td>
            <td>p2</td>
            <td>- 장착한 방패 외형이 캐릭터 왼손에 반영됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">24</td>
            <td className="depth3">투구</td>
            <td></td>
            <td>- 장착 가능한 투구가 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 투구 장착
              <br />
              3. 캐릭터 외형 확인
            </td>
            <td>- 장착한 투구 외형이 캐릭터 머리에 반영되어야 한다.</td>
            <td>p2</td>
            <td>- 장착한 투구 외형이 캐릭터 머리에 반영됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">25</td>
            <td className="depth3">갑옷</td>
            <td></td>
            <td>- 장착 가능한 갑옷이 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 갑옷 장착
              <br />
              3. 캐릭터 외형 확인
            </td>
            <td>- 장착한 갑옷 외형이 캐릭터 몸통에 반영되어야 한다.</td>
            <td>p2</td>
            <td>- 장착한 갑옷 외형이 캐릭터 몸통에 반영됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">26</td>
            <td rowspan="3" className="depth3">
              공통
            </td>
            <td></td>
            <td>
              - 무기 세트 I, II에 서로 다른 장비 상태가 구성되어 있어야 한다.
            </td>
            <td>
              1, 캐릭터 외형 확인 <br />
              2. W키 입력
              <br />
              3. 캐릭터 외형 확인
            </td>
            <td>
              - 무기 세트 전환 전/후 캐릭터 외형이 다르게 반영되어야 한다.
              <br />
              ㄴ 장착되지 않은 부위는 맨손 상태여야 한다.
              <br />ㄴ 장착된 부위는 해당 장비 외형 상태여야 한다.
            </td>
            <td>p2</td>
            <td>
              - 무기 세트 전환 전/후 캐릭터 외형이 다르게 반영됨
              <br />
              ㄴ 무기 및 방패가 않는 부위는 맨손 상태
              <br />ㄴ 무기 및 방패가 장착된 부위는 해당 장비 외형 상태
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">27</td>
            <td></td>
            <td>- 에테리얼 무기, 방패, 투구 또는 갑옷이 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 에테리얼 장비 장착
              <br />
              3. 캐릭터 외형 확인
            </td>
            <td>
              - 에테리얼 무기, 방패, 투구, 갑옷 외형이 캐릭터에 반투명 상태로
              반영되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 에테리얼 무기, 방패, 투구, 갑옷 외형이 캐릭터에 반투명 상태로
              반영됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">28</td>
            <td></td>
            <td>- 에테리얼 신발, 벨트 또는 장갑이 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 에테리얼 장비 장착
              <br />
              3. 캐릭터 외형 확인
            </td>
            <td>
              - 에테리얼 신발, 벨트, 장갑은 캐릭터 외형에 반투명 상태로 반영되지
              않아야 한다.
            </td>
            <td>p2</td>
            <td>
              - 에테리얼 신발, 벨트, 장갑은 캐릭터 외형에 반투명 상태로 반영되지
              않음
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">29</td>
            <td rowspan="22" className="depth2">
              스탯
            </td>
            <td className="depth3">레벨</td>
            <td></td>
            <td>- 몬스터와 전투를 해서 경험치를 얻을 수 있어야 한다.</td>
            <td>
              1. 캐릭터 스탯창 오픈
              <br />
              2. 현재 경험치 수치 확인
              <br />
              3. 몬스터 처치
              <br />
              4. 캐릭터 스탯창 오픈
              <br />
              5. 현재 경험치 수치 확인
            </td>
            <td>
              - 몬스터 처치 시 경험치 수치가 증가해야 한다.
              <br />- 경험치 바가 증가한 경험치 수치에 따라 표시되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 몬스터 처치 후 경험치 수치가 증가됨.
              <br />- 경험치 바가 증가한 경험치 수치에 따라 증가됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">30</td>
            <td rowspan="2" className="depth3">
              능력치
            </td>
            <td></td>
            <td>- 사용 가능한 능력치 포인트가 존재해야 한다.</td>
            <td>
              1. 캐릭터 창 오픈
              <br />
              2. 힘, 민첩, 활력 또는 마력에 능력치
              <br />
              포인트 분배
              <br />
              3. 능력치 수치 확인
              <br />
              4. 남은 능력치 포인트 확인
            </td>
            <td>
              - 능력치 포인트를 사용한 수만큼 해당 능력치가 증가해야한다.
              <br />- 능력치 포인트를 사용한 수만큼 남은 능력치 포인트가
              줄어들어야한다.
            </td>
            <td>p2</td>
            <td>
              - 능력치 포인트를 사용한 수만큼 해당 능력치가 증가됨
              <br />- 능력치 포인트를 사용한 수만큼 남은 능력치 포인트가 감소됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">31</td>
            <td></td>
            <td>- 능력치 증가 옵션이 포함된 장비 또는 차암이 존재해야 한다.</td>
            <td>
              1. 인벤토리 오픈
              <br />
              2. 능력치 증가 옵션 장비 또는 차암 장착
              <br />
              3. 캐릭터 스탯창 오픈 <br />
              4. 능력치 수치 확인
            </td>
            <td>
              - 장비 또는 차암 옵션에 따라 해당 스탯이 증가해야 한다.
              <br />- 장비 또는 차암 옵션이 적용된 스탯은 파란색으로 표시되어야
              한다.
            </td>
            <td>p2</td>
            <td>
              - 장비 또는 차암 옵션에 따라 해당 스탯이 증가됨
              <br />- 장비 또는 차암 옵션이 적용된 스탯은 파란색으로 노출됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">32</td>
            <td rowspan="3" className="depth3">
              공격 피해
            </td>
            <td></td>
            <td>
              - 사용 가능한 능력치 포인트가 존재해야 한다.
              <br />- 일반 근접무기, 해머류, 창/재벌린, 단검, 클러 또는 <br />
              투척 무기를 착용한 상태여야 한다.
            </td>
            <td>
              1. 캐릭터 스탯창 오픈
              <br />
              2. 현재 공격 피해 수치 확인 <br />
              3. 힘 능력치 증가
              <br />
              4. 공격 피해 수치 확인
            </td>
            <td>- 힘 능력치 증가에 따라 공격 피해 수치가 증가해야 한다.</td>
            <td>p0</td>
            <td>- 힘 능력치 증가에 따라 공격 피해 수치가 증가됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">33</td>
            <td></td>
            <td>
              - 사용 가능한 능력치 포인트가 존재해야 한다.
              <br />- 단검, 클러, 투척 무기, 창/재벌린, 활/석궁을 착용한
              상태여야 한다.
            </td>
            <td>
              1. 캐릭터 스탯창 오픈
              <br />
              2. 현재 공격 피해 수치 확인 <br />
              3. 민첩 능력치 증가
              <br />
              4. 공격 피해 수치 확인
            </td>
            <td>- 민첩 능력치 증가에 따라 공격 피해 수치가 증가해야 한다.</td>
            <td>p0</td>
            <td>- 민첩 능력치 증가에 따라 공격 피해 수치가 증가됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">34</td>
            <td></td>
            <td>
              - 사용 가능한 스킬 포인트가 존재해야 한다.
              <br />- 공격 스킬이 스킬 슬롯에 활성화 된 상태여야 한다.
            </td>
            <td>
              1. 스킬 창 오픈
              <br />
              2. 공격 스킬, 시너지 스킬 포인트 투자
              <br />
              3. 캐릭터 스탯창 오픈
              <br />
              4. 스킬 피해 수치 확인
            </td>
            <td>
              - 스킬 포인트 투자에 따라 활성화된 공격 스킬의 피해 수치가
              증가해야 한다.
              <br />- 시너지 효과가 존재하는 경우 연관 스킬 투자시에도 피해
              수치가 증가해야 한다.{" "}
            </td>
            <td>p0</td>
            <td>
              - 스킬 포인트 투자에 따라 활성화된 공격 스킬의 피해 수치가 증가됨{" "}
              <br />- 시너지 효과연관 스킬 투자시 공격 스킬의 피해 수치가
              증가됨{" "}
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">35</td>
            <td rowspan="3" className="depth3">
              공격 명중률
            </td>
            <td></td>
            <td>- 사용 가능한 능력치 포인트가 존재해야 한다.</td>
            <td>
              1. 캐릭터 스탯창 오픈
              <br />
              2. 현재 공격 명중률 수치 확인 <br />
              3. 민첩 능력치 증가
              <br />
              4. 공격 명중률 수치 확인
            </td>
            <td>- 민첩 능력치 증가에 따라 공격 명중률 수치가 증가해야 한다.</td>
            <td>p0</td>
            <td>- 민첩 능력치 증가에 따라 공격 명중률 수치가 증가됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">36</td>
            <td></td>
            <td>- 최근 몬스터와 전투한 이력이 존재해야 한다.</td>
            <td>
              1. 몬스터와 전투 진행
              <br />
              2. 캐릭터 스탯창 오픈
              <br />
              3. 공격 명중률 수치 영역 마우스 오버
            </td>
            <td>
              - 공격력 수치 영역에 마우스 오버 시 최근 전투 몬스터 기준 평균
              명중률 정보가 툴팁으로
              <br />
              노출되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 아래 정보가 툴팁으로 노출됨
              <br />ㄴ [최근 전투 몬스터명] : [명중률]
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">37</td>
            <td></td>
            <td>- 공격 가능한 몬스터가 존재해야 한다.</td>
            <td>
              1. 캐릭터보다 레벨이 매우 높은 몬스터와 전투 <br />
              2. 캐릭터 스탯창 오픈 <br />
              3. 공격 명중률 수치 영역 마우스 오버 <br />
              4. 툴팁의 평균 명중률 수치 확인 <br />
              5. 캐릭터보다 레벨이 매우 낮은 몬스터와 전투 <br />
              6. 공격 명중률 수치 영역 마우스 오버 <br />
              7. 툴팁의 평균 명중률 수치 확인
            </td>
            <td>
              - 캐릭터보다 레벨이 매우 높은 몬스터와 전투 시 평균 명중률은 5%
              미만으로
              <br />
              표시되지 않아야 한다.
              <br />- 캐릭터보다 레벨이 매우 낮은 몬스터와 전투 시 평균 명중률은
              95%를 초과하여
              <br />
              표시되지 않아야 한다.{" "}
            </td>
            <td>p2</td>
            <td>
              - 캐릭터보다 레벨이 매우 높은 몬스터와 전투 시 평균 명중률이 5%로
              표시됨
              <br />- 캐릭터보다 레벨이 매우 낮은 몬스터와 전투 시 평균 명중률이
              95%로 표시됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">38</td>
            <td rowspan="5" className="depth3">
              방어력
            </td>
            <td></td>
            <td>- 방어력 옵션이 포함된 장비가 존재해야 한다.</td>
            <td>
              1. 캐릭터 스탯창 오픈 <br />
              2. 현재 방어력 수치 확인 <br />
              3. 방어력 장비 착용 또는 해제 <br />
              4. 방어력 수치 확인
            </td>
            <td>- 장비 옵션에 따라 방어력 수치가 증가 또는 감소되어야 한다.</td>
            <td>p1</td>
            <td>- 장비 옵션에 따라 방어력 수치가 증가 또는 감소됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">39</td>
            <td></td>
            <td>
              - 최근 몬스터와 전투한 이력이 존재해야 한다.
              <br />- 방패를 착용하지 않은 상태여야 한다.
            </td>
            <td rowspan="2">
              1. 몬스터와 전투 진행
              <br />
              2, 캐릭터 스탯창 오픈 <br />
              3. 방어력 수치영역 마우스 오버
            </td>
            <td>
              - 방어력 수치 영역에 마우스 오버 시 최근 전투 몬스터 기준 공격이
              명중할 평균 <br />
              확률 정보가 툴팁으로 출력되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 아래 정보가 툴팁으로 노출됨
              <br />ㄴ [최근 전투 몬스터명]의 공격이 명중할 평균 확률: [명중
              확률]
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">40</td>
            <td></td>
            <td>
              - 최근 몬스터와 전투한 이력이 존재해야 한다.
              <br />- 방패를 착용한 상태여야 한다..
            </td>
            <td>
              - 방어력 수치 영역에 마우스 오버 시 최근 전투 몬스터 기준 공격이
              명중할 평균 <br />
              확률 및 막기 확률 정보가 툴팁으로 출력되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 아래 정보가 툴팁으로 노출됨
              <br />
              ㄴ [최근 전투 몬스터명]의 공격이 명중할 평균 확률: [명중 확률]
              <br />ㄴ 막기 확률: [막을 확률]
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">41</td>
            <td></td>
            <td>
              - 사용 가능한 능력치 포인트가 존재해야 한다.
              <br />- 방패를 착용한 상태여야 한다.
              <br />- 최근 몬스터와 전투한 이력이 존재해야 한다.
            </td>
            <td>
              1. 몬스터와 전투 진행 <br />
              2. 캐릭터 스탯창 오픈
              <br />
              3. 방어력 수치 영역 마우스 오버 <br />
              4. 현재 명중당할 평균 확률 및 막기 확률 확인
              <br />
              5. 민첩 능력치 증가
              <br />
              6. 방어력 수치 영역 마우스 오버 <br />
              7. 현재 명중당할 평균 확률 및 막기 확률 확인
            </td>
            <td>
              - 민첩 능력치 증가에 따라 명중당할 평균 확률이 감소해야 한다.
              <br />- 민첩 능력치 증가에 따라 막기 확률은 증가해야 한다.
            </td>
            <td>p2</td>
            <td>
              - 민첩 능력치 증가에 따라 명중당할 평균 확률이 감소됨
              <br />- 민첩 능력치 증가에 따라 막기 확률이 증가됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">42</td>
            <td></td>
            <td>
              - 방패를 착용한 상태여야 한다.
              <br />- 최근 몬스터와 전투한 이력이 존재해야 한다.
              <br />- 막기 확률을 75% 이상 올릴 수 있는 민첩 능력치나 아이템을{" "}
              <br />
              보유해야한다.
            </td>
            <td>
              1. 민첩 능력치 및 장비 옵션을 조정하여 막기 확률을 75%까지 증가
              <br />
              2. 민첩 능력치 또는 막기 확률 증가 옵션을 추가 적용
              <br />
              3. 몬스터와 전투 진행
              <br />
              4. 캐릭터 스탯창 오픈
              <br />
              5. 방어력 수치 영역 마우스 오버
              <br />
              6. 툴팁의 막기 확률 확인
            </td>
            <td>- 막기 확률은 75%를 초과하여 표시되지 않아야 한다.</td>
            <td>p1</td>
            <td>
              - 민첩 능력치 및 장비 옵션을 추가 적용해도 막기 확률이 75%로
              표시됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">43</td>
            <td className="depth3">지구력</td>
            <td></td>
            <td rowspan="3">- 사용 가능한 능력치 포인트가 존재해야 한다.</td>
            <td>
              1. 캐릭터 스탯창 오픈
              <br />
              2. 현재 생명력 수치 확인
              <br />
              3. 활력 능력치 증가
              <br />
              4. 생명력 수치 확인
            </td>
            <td>- 활력 능력치 증가에 따라 생명력 수치가 증가해야 한다.</td>
            <td>p2</td>
            <td>- 활력 능력치 증가에 따라 생명력 수치가 증가됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">44</td>
            <td className="depth3">생명력</td>
            <td></td>
            <td>
              1. 캐릭터 스탯창 오픈
              <br />
              2. 현재 지구력 수치 확인
              <br />
              3. 활력 능력치 증가
              <br />
              4. 지구력 수치 확인
            </td>
            <td>- 활력 능력치 증가에 따라 지구력 수치가 증가해야 한다.</td>
            <td>p2</td>
            <td>- 활력 능력치 증가에 따라 지구력 수치가 증가됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">45</td>
            <td className="depth3">마나</td>
            <td></td>
            <td>
              1. 캐릭터 스탯창 오픈
              <br />
              2. 현재 마나 수치 확인
              <br />
              3. 마력 능력치 증가
              <br />
              4. 마나 수치 확인
            </td>
            <td>- 마력 능력치 증가에 따라 마나 수치가 증가해야 한다.</td>
            <td>p2</td>
            <td>- 마력 능력치 증가에 따라 마나 수치가 증가됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">46</td>
            <td rowspan="5" className="depth3">
              저항력
            </td>
            <td></td>
            <td>
              - 최대 저항력 증가 옵션이 포함된 장비가 존재해야 한다.
              <br />- 해당 저항력 수치가 최대 저항력(75%)에 도달한 상태여야
              한다.
            </td>
            <td>
              1. 최대 저항력 증가 옵션 장비 장착
              <br />
              2. 캐릭터 스탯창 오픈
              <br />
              3. 저항력 수치 확인
            </td>
            <td>
              - 최대 저항력 증가 옵션에 따라 해당 저항력 최대치가 증가됨
              <br />- 최대 저항력이 95%를 초과하지 않고 표시됨
            </td>
            <td>p2</td>
            <td>
              - 최대 저항력 증가 옵션에 따라 해당 저항력 최대치가 증가됨
              <br />- 최대 저항력이 95%를 초과하지 않고 표시됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">47</td>
            <td></td>
            <td>
              - 캐릭터의 저항력 수치가 -100% 보다 높은 상태여야한다.
              <br />- 저항력을 감소시키는 저주 또는 오라를 적용할 수 있는
              몬스터가 <br />
              존재해야 한다.
            </td>
            <td>
              1. 캐릭터 스탯창 오픈 <br />
              2. 현재 저항력 수치 확인 <br />
              3. 저주 사용 또는 오라가 적용된 몬스터와
              <br />
              전투 진행
              <br />
              4. 캐릭터 스탯창 오픈 <br />
              5. 저항력 수치 확인{" "}
            </td>
            <td>
              - 저항력을 감소시키는 오라 또는 저주 효과에 따라 해당 저항력
              수치가 감소해야 한다.
            </td>
            <td>p1</td>
            <td>
              - 저항력을 감소시키는 오라 또는 저주 효과 수치만큼 저항력이 감소됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">48</td>
            <td></td>
            <td>
              - 최대 저항력을 95%로 만들 수 있는 장비가 존재해야 한다.
              <br />- 저항력 수치를 95% 이상 누적할 수 있는 장비가
              <br />
              존재해야한다.
            </td>
            <td>
              1. 최대 저항력 및 저항력 증가 장비 장착
              <br />
              2. 캐릭터 스탯창 오픈 <br />
              3. 저항력 수치 확인
            </td>
            <td>- 최대 저항력이 95%를 초과해서 표시되지 않아야 한다.</td>
            <td>p1</td>
            <td>- 최대 저항력이 95%를 초과해서 표시되지 않음</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">49</td>
            <td></td>
            <td>- 저항력 수치를 -100%로 만들 수 있는 환경이어야 한다.</td>
            <td>
              1. 저항력 감소 효과 적용 <br />
              2. 캐릭터 스탯창 오픈
              <br />
              3. 저항력 수치 확인
            </td>
            <td>- 최소 저항력이 -100%를 초과해서 표시되지 않아야 한다.</td>
            <td>p1</td>
            <td>- 최소 저항력이 -100%를 초과해서 표지되지 않음</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">50</td>
            <td></td>
            <td>
              - 나이트메어 또는 헬 난이도 진입 조건을 충족한 캐릭터야 한다.
            </td>
            <td>
              1. 나이트메어 난이도 진입
              <br />
              2. 캐릭터 스탯창에서 저항력 확인 <br />
              3. 헬 난이도 진입
              <br />
              4. 캐릭터 스탯창에서 저항력 확인
            </td>
            <td>
              - 나이트메어 난이도에서 모든 저항력에 -40% 패널티가 적용되어야
              한다.
              <br />- 헬 난이도에서 모든 저항력에 -100% 패널티가 적용되어야
              한다.
            </td>
            <td>p1</td>
            <td>
              - 나이트메어 난이도에서 모든 저항력 -40% 패널티가 적용되어
              스탯창에 표시됨
              <br />- 헬 난이도에서 모든 저항력에 -100% 패널티가 적용되어
              스탯창에 표시됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">51</td>
            <td rowspan="8" className="depth2">
              레벨
            </td>
            <td className="depth3">레벨 증가</td>
            <td></td>
            <td rowspan="3">- 레벨업 직전 경험치 상태여야 한다.</td>
            <td>
              1. 현재 캐릭터 레벨 확인
              <br />
              2. 몬스터 처치
              <br />
              3. 캐릭터 레벨 확인
            </td>
            <td>- 레벨업 시 캐릭터 레벨이 증가해야 한다.</td>
            <td>p0</td>
            <td>- 레벨업 시 캐릭터 레벨이 증가됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">52</td>
            <td className="depth3">포인트 지급</td>
            <td></td>
            <td>
              1. 현재 잔여 스킬/능력치 포인트 확인
              <br />
              2. 몬스터 처치 <br />
              3. 잔여 스킬/능력치 포인트 확인
            </td>
            <td>
              - 레벨업 시 능력치 포인트가 지급되어야 한다.
              <br />- 레벨업 시 스킬 포인트가 지급되어야 한다.
            </td>
            <td>p1</td>
            <td>
              - 레벨업 시 능력치 포인트가 지급됨
              <br />- 레벨업 시 스킬 포인트가 자급됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">53</td>
            <td className="depth3">레벨업 회복</td>
            <td></td>
            <td>
              1. 현재 생명력 및 마나 수치 확인
              <br />
              2. 몬스터 처치 <br />
              3. 현재 생명릭 및 마나 수치 확인
            </td>
            <td>
              - 레벨업 시 생명력이 최대치로 회복되어야 한다.
              <br />- 레벨업 시 마나가 최대치로 회복되어야 한다.
            </td>
            <td>p1</td>
            <td>
              - 레벨업 시 생명력이 최대치로 회복됨
              <br />- 레벨업 시 마나가 최대치로 회복됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">54</td>
            <td rowspan="5" className="depth3">
              경험치 획득
            </td>
            <td></td>
            <td>
              - 캐릭터와 레벨 차이가 5 이하인 몬스터와 5 초과인 몬스터가
              <br />
              존재해야 한다.
            </td>
            <td>
              1. 현재 경험치 수치 확인
              <br />
              2. 레벨 차이가 5초과인 몬스터 처치
              <br />
              3. 경험치 수치 확인
              <br />
              4. 레벨 차이가 5이하인 몬스터 처치
              <br />
              5. 경험치 수치 확인
            </td>
            <td>
              - 캐릭터와 몬스터의 레벨 차이가 5를 초과한 경우 획득 경험치가
              감소해야 한다.
              <br />- 캐릭터와 몬스터의 레벨 차이가 5이하일 경우 획득 경험치가
              감소하지 않아야 한다.
            </td>
            <td>p0</td>
            <td>
              - 캐릭터와 몬스터의 레벨 차이가 5를 초과할 경우 획득 경험치가
              감소됨
              <br />- 캐릭터와 몬스터의 레벨 차이가 5 이하일 경우 획득 경험치가
              감소하지 않음
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">55</td>
            <td></td>
            <td>
              - 70레벨 이상인 캐릭터가 존재해야 한다.
              <br />- 70레벨 미만인 캐릭터가 존재해야 한다.
              <br />- 동일한 몬스터를 처치할 수 있어야 한다.
            </td>
            <td>
              1. 70레벨 미만인 캐릭터의 현재 경험치 확인
              <br />
              2. 동일한 몬스터 처치 <br />
              3. 경험치 수치 확인 <br />
              4. 70레벨 이상인 캐릭터의 현재 경험치 확인
              <br />
              5. 동일한 몬스터 처치 <br />
              6. 경험치 수치 확인
            </td>
            <td>
              - 70레벨 이상인 캐릭터는 경험치 획득 패널티가 적용되어야 한다.
              <br />- 70레벨 미만인 캐릭터는 경험치 획득 패널티가 적용되지
              않아야 한다.
            </td>
            <td>p1</td>
            <td>
              - 70레벨 이상인 캐릭터는 경험치 획득 패널티가 적용됨
              <br />- 70레벨 미만인 캐릭터는 경험치 획득 패널티가 적용되지 않음
              <br />
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">56</td>
            <td></td>
            <td>- 파티원이 동일한 지역에 존재해야 한다.</td>
            <td>
              1. 파티원이 동일 화면 내 위치
              <br />
              2. 파티원이 몬스터 처치 <br />
              3. 경험치 수치 확인
              <br />
              4. 파티원이 동일 화면 밖 위치 <br />
              5. 파티원이 몬스터 처치
              <br />
              6. 경험치 수치 확인
            </td>
            <td>
              - 동일 화면 내에서 파티원이 몬스터를 처치할 경우 경험치를 획득해야
              한다.
              <br />- 동일 화면 밖에서 파티원이 몬스터를 처치할 경우 경험치를
              획득하지 않아야 한다.
            </td>
            <td>p1</td>
            <td>
              - 동일 화면 내에서 파티원이 몬스터를 처치시 경험치를 획득함
              <br />- 동일 화면 밖에서 파티원이 몬스터를 처치시 경험치를
              획득하지 않음
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">57</td>
            <td></td>
            <td>
              - 파티원이 동일한 지역에 존재해야 한다.
              <br />- 파티원의 수를 변경할 수 있어야 한다.
            </td>
            <td>
              1. 파티 인원을 적은 상태로 구성
              <br />
              2. 경험치 수치 확인 <br />
              3. 몬스터 처치 <br />
              4. 경험치 증가 수치 확인
              <br />
              5. 파티 인원을 늘린 상태로 구성
              <br />
              6. 몬스터 처치 <br />
              7. 경험치 증가 수치 확인
            </td>
            <td>
              - 파티 인원 증가에 따라 몬스터 처치 경험치가 증가되어야 한다.
            </td>
            <td>p1</td>
            <td>- 파티 인원 증가에 따라 몬스터 처치 경험치가 증가됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">58</td>
            <td></td>
            <td>- 99레벨 캐릭터가 존재해야 한다.</td>
            <td>
              1. 현재 경험치 바 또는 스탯창 경험치 확인
              <br />
              2. 몬스터 처치
              <br />
              3. 현재 경험치 바 또는 스탯창 경험치 확인
            </td>
            <td>
              - 99레벨 캐릭터는 몬스터 처치 후에도 경험치를 획득하지 않아야
              한다.
            </td>
            <td>p1</td>
            <td>
              - 99레벨 캐릭터는 몬스터 처치 후에도 경험치를 획득하지 않는다
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">59</td>
            <td rowspan="8" className="depth1">
              용병
            </td>
            <td rowspan="6" className="depth2">
              용병창
            </td>
            <td rowspan="3" className="depth3">
              장비 영역
            </td>
            <td rowspan="2" className="depth4">
              장비 공통
            </td>
            <td>
              - 용병이 존재해야 한다.
              <br />- 용병이 장착 가능한 장비가 존재해야 한다.
            </td>
            <td>
              1. 용병창 오픈
              <br />
              2. 장비 장착
              <br />
              3. 장비 장착 상태 확인
              <br />
              4. 장비 해제
              <br />
              5. 장비 해제 상태 확인
            </td>
            <td>
              - 선택한 장비가 용병 장비 슬롯에 장착되어야 한다.
              <br />- 해제한 장비가 용병 장비 슬롯에서 제거되어야 한다.
            </td>
            <td>p2</td>
            <td>
              - 선택한 장비가 용병 장비 슬롯에 장착됨
              <br />- 해제한 장비가 용병 장비 슬롯에서 제거됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">60</td>
            <td>
              - 액트1, 액트2, 액트3, 액트5 용병이 존재해야 한다.
              <br />- 각 용병이 장착 가능한 무기 및 방패와 장착할 수 없는 <br />
              무기 및 방패가 존재해야 한다.
            </td>
            <td>
              1. 액트1 용병에게 활 또는 석궁 장착
              <br />
              2. 액트1 용병에게 활 또는 석궁 이외의 무기 장착 시도
              <br />
              3. 액트2 용병에게 창 계열 무기 장착
              <br />
              4. 액트2 용병에게 창 계열 이외의 무기 장착 시도
              <br />
              5. 액트3 용병에게 한손검 및 방패 장착
              <br />
              6. 액트3 용병에게 장착할 수 없는 무기 및<br />
              특정 클래스 전용 방패 장착 시도
              <br />
              7. 액트5 용병에게 양손검 장착
              <br />
              8. 액트5 용병에게 양손검 이외의 무기 장착 시도
            </td>
            <td>
              - 액트1 용병은 활 또는 석궁만 장착되어야 한다.
              <br />- 액트2 용병은 창 계열 무기만 장착되어야 한다.
              <br />- 액트3 용병은 한손검 및 방패를 장착할 수 있어야 한다.
              <br />- 액트5 용병은 양손검만 장착되어야 한다.
            </td>
            <td>p0</td>
            <td>
              - 액트1 용병은 활 또는 석궁만 장착됨.
              <br />- 액트2 용병은 창 계열 무기만 장착됨.
              <br />- 액트3 용병은 한손검 및 방패를 장착할 수 있음.- 액트5
              용병은 양손검만 장착됨.
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">61</td>
            <td className="depth4">장비 유지</td>
            <td>
              - 용병이 존재해야 한다. <br />- 용병에게 장비가 장착되어 있어야
              한다.
            </td>
            <td>
              1. 용병창 오픈
              <br />
              2. 현재 장착된 장비 확인
              <br />
              3. 용병 사망
              <br />
              4. 용병 부활
              <br />
              5. 용병창 오픈
              <br />
              6. 장착된 장비 확인
            </td>
            <td>- 용병이 사망 후 부활하여도 장착한 장비가 유지되어야 한다.</td>
            <td>p0</td>
            <td>- 용병이 사망 후 부활하여도 장착한 장비가 유지됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">62</td>
            <td rowspan="3" className="depth3">
              스탯 영역
            </td>
            <td rowspan="3" className="depth4">
              레벨
            </td>
            <td rowspan="3">
              - 용병이 존재해야 한다.
              <br />- 몬스터 처치 시 용병이 레벨업 할 수 있는 경험치를 보유해야
              한다.
            </td>
            <td>
              1. 용병창 오픈
              <br />
              2. 현재 용병 레벨 확인
              <br />
              3. 몬스터 처치 <br />
              4. 용병창 오픈
              <br />
              5. 용병 레벨 확인
            </td>
            <td>
              - 레벨업할 만큼의 경험치를 획득하였을 때 용병의 레벨이 증가하여야
              한다.
            </td>
            <td>p1</td>
            <td>
              - 레벨업할 만큼의 경험치를 획득하였을 때 용병의 레벨이 증가됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">63</td>
            <td>
              1. 용병창 오픈
              <br />
              2. 현재 생명력~방어력 스탯 확인
              <br />
              3. 몬스터 처치
              <br />
              4. 용병창 오픈
              <br />
              5. 생명력~방어력 스탯 확인
            </td>
            <td>
              - 용병이 레벨업 했을 때 생명력, 힘, 민첩, 피해, 방어력이 증가해야
              한다.
            </td>
            <td>p1</td>
            <td>
              - 용병이 레벨업 했을 때 생명력, 힘, 민첩, 피해, 방어력이 증가됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">64</td>
            <td>
              1. 용병창 오픈
              <br />
              2. 현재 화염, 냉기, 번개, 독 저항 수치 확인
              <br />
              3. 몬스터 처치
              <br />
              4. 용병창 오픈
              <br />
              5. 화염, 냉기, 번개, 독 저항 수치 확인
            </td>
            <td>
              - 용병이 레벨업하였을 때 모든 저항력 수치가 증가되어야 한다.
            </td>
            <td>p1</td>
            <td>- 용병이 레벨업 했을 때 모든 저항력 수치가 증가됨</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">65</td>
            <td rowspan="2" className="depth2">
              외형
            </td>
            <td></td>
            <td></td>
            <td>
              - 용병이 존재해야 한다.
              <br />- 장착 가능한 장비가 존재해야 한다.
            </td>
            <td>
              1. 용병창 오픈
              <br />
              2. 장비 장착
              <br />
              3. 용병 외형 확인
              <br />
              4. 장비 해제
              <br />
              5. 용병 외형 확인
            </td>
            <td>
              - 장비 장착 여부에 관계없이 용병의 외형은 변경되지 않아야 한다.
            </td>
            <td>p1</td>
            <td>- 장비 장착 여부에 관계없이 용병의 외형이 변경되지 않음</td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
          <tr>
            <td className="col-no">66</td>
            <td></td>
            <td></td>
            <td>
              - 용병이 존재해야 한다.
              <br />- 용병에게 오라 또는 저주를 적용시킬 수 있어야한다.
            </td>
            <td>
              1. 용병에게 오라 또는 저주를 적용
              <br />
              2. 용병 외형 확인 <br />
              3. 용병에게 오라 또는 저주를 해제
              <br />
              4. 용병 외형 확인
            </td>
            <td>
              - 오라 또는 저주 적용 및 해제에 따라 용병 외형의 상태 효과가 표시
              및 <br />
              제거되어야 한다.
            </td>
            <td>p1</td>
            <td>
              - 오라 또는 저주 적용 및 해제에 따라 용병 외형의 상태 효과가 표시
              및 제거됨
            </td>
            <td className="status-pass">Pass</td>
            <td></td>
          </tr>
        </tbody>
      )}
    </table>
  );
}

export default TestSample;
