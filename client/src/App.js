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



function App() {
  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

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
          {

          this.state.customers ? this.state.customers.map(c => (
            <Customer 
              key={c.id} 
              id={c.id} 
              image={c.image} 
              name={c.name} 
              birthday={c.birthday} 
              gender={c.gender} 
              job={c.job} 
            />
          )) : ""
          
          }
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}

export default App;