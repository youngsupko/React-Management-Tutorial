import React from 'react';
import Customer from './components/Customer';
import './App.css';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// 1. styled API의 올바른 사용법
// root나 table 같은 키를 쓰지 않고 스타일을 직접 정의합니다.
const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3), // v5/v6에서는 theme.spacing.unit 대신 theme.spacing() 사용
  overflowX: "auto",
}));

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const customers = [
  {
    'id': 1,
    'image': 'https://placehold.co/64/64/red',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placehold.co/64/64/blue',
    'name': '이몽룡', // 예시 이름 수정
    'birthday': '201213',
    'gender': '남자',
    'job': '취준생'
  },
  {
    'id': 3,
    'image': 'https://placehold.co/64/64/black',
    'name': '이정재',
    'birthday': '991230',
    'gender': '남자',
    'job': '배우'
  }
];

function App() {
  // 2. 함수형 컴포넌트에서는 'this.props'를 삭제합니다.
  // StyledPaper와 StyledTable이 클래스 역할을 대신합니다.
  return (
    <StyledPaper>
      <StyledTable>
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
        <TableBody>
          {customers.map(c => (
            <Customer 
              key={c.id} 
              id={c.id} 
              image={c.image} 
              name={c.name} 
              birthday={c.birthday} 
              gender={c.gender} 
              job={c.job} 
            />
          ))}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}

export default App;