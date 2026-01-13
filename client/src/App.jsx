import { useState, useEffect } from 'react';
import Customer from './components/Customer';

// Material UI(MUI) 컴포넌트 임포트
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

/** 
 * [스타일 정의] 
 * styled-components 방식으로 컴포넌트에 디자인을 입힙니다.
 */
const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3), // MUI의 기본 여백 체계 활용
  overflowX: "auto",           // 가로 스크롤 허용
}));

const StyledTable = styled(Table)({
  minWidth: 1080,               // 테이블 최소 너비 고정
});

function App() {
  /** 
   * [상태 관리] 
   * customers: 서버에서 받아온 고객 데이터 목록을 저장
   */
  const [customers, setCustomers] = useState("");

  /** 
   * [생명주기 관리] 
   * useEffect: 컴포넌트가 처음 렌더링될 때(Mount) API를 호출합니다.
   */
  useEffect(() => {
    callApi()
      .then(res => setCustomers(res))
      .catch(err => console.log(err));
  }, []);

  /** 
   * [데이터 통신] 
   * fetch를 사용하여 백엔드(/api/customers)로부터 데이터를 가져옵니다.
   */
  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

  return (
    <StyledPaper>
      <StyledTable>
        {/* 테이블 헤더: 컬럼 제목 표시 */}
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>

        {/* 테이블 바디: 데이터 출력 또는 로딩 표시 */}
        <TableBody>
          {customers ? (
            // 데이터가 존재할 경우: 배열을 순회하며 Customer 컴포넌트 출력
            customers.map((c) => (
              <Customer
                key={c.id} // 리스트 렌더링 시 고유 키값 필수
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            ))
          ) : (
            // 데이터가 없을 경우(로딩 중): CircularProgress(로딩 바) 표시
            <TableRow>
              <TableCell colSpan={6} align="center">
                <CircularProgress sx={{ my: 4 }} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}

export default App;

