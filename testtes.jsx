function TestCaseList() {
  return (
    <div className="table_wrap">
      <table>
        <thead>
          <tr>
            <th>TID</th>
            <th>대분류</th>
            <th>중분류</th>
            <th>소분류</th>
            <th>사전 조건</th>
            <th>스텝</th>
            <th>중요도</th>
            <th>예상 결과</th>
            <th>실제 결과</th>
            <th>상태</th>
            <th>버그 리포트</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="7">TC-LOGIN-001</td>
            <td rowspan="7">종목 상세</td>
            <td rowspan="7">기본 정보</td>
            <td rowspan="7">상세 페이지</td>

            <td rowspan="7">
              <p> 1. 로그인 상태여야 한다. </p>
              <p> 2.종목 리스트 접근이 가능해야 한다.</p>
            </td>
            <td rowspan="7">
              <p>1. 메인 홈 화면의 종목 리스트에서 특정 종목을 클릭한다.</p>
            </td>
            <td>P0</td>
            <td>
              <p>선택한 종목 상세 페이지로 이동된다.</p>
            </td>
            <td>
              <p>선택한 종목의 상세 페이지로 정상 이동되었다.</p>
            </td>
            <td>
              <span>Fail</span>
            </td>
            <td>
              <span>BUG-LOGIN-001</span>
            </td>
          </tr>
          <tr>
            <td>P0</td>
            <td>
              <p>
                상세 페이지 좌측 상단 영역에 선택한 종목명 및 종목 코드가
                출력된다.
              </p>
            </td>
            <td>
              <p>
                좌측 상단 영역에 종목명(CRWV) 및 종목 코드가 정상 출력되었다.
              </p>
            </td>
            <td>
              <span>Pass</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>P0</td>
            <td>
              <p>종목명 하단 영역에 현재가 및 등락률 정보가 출력된다.</p>
            </td>
            <td>
              <p>
                종목명 하단 영역에 현재가($135.45) 및 등락률(-1.83%) 정보가 정상
                출력되었다.
              </p>
            </td>
            <td>
              <span>Pass</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>P0</td>
            <td>
              <p>중앙 차트 영역에 캔들 차트가 출력된다.</p>
            </td>
            <td>
              <p>중앙 차트 영역에 캔들 차트가 정상 출력되었다.</p>
            </td>
            <td>
              <span>Pass</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>P0</td>
            <td>
              <p>차트 하단 영역에 거래량 그래프가 출력된다.</p>
            </td>
            <td>
              <p>차트 하단 영역에 거래량 그래프가 정상 출력되었다.</p>
            </td>
            <td>
              <span>Pass</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>P0</td>
            <td>
              <p>하단 호가 영역에 매도/매수 호가 데이터가 출력된다.</p>
            </td>
            <td>
              <p>하단 호가 영역에 매도/매수 호가 데이터가 정상 출력되었다.</p>
            </td>
            <td>
              <span>Pass</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>P0</td>
            <td>
              <p>우측 체결 영역에 실시간 체결 데이터가 출력된다.</p>
            </td>
            <td>
              <p>우측 체결 영역에 실시간 체결 데이터가 정상 출력되었다.</p>
            </td>
            <td>
              <span>Pass</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TestCaseList;
