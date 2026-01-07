import Customer from './components/Customer'
import './App.css';

const customers = [{
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
  'name': '문재인',
  'birthday': '201213',
  'gender': '남자',
  'job': '대통령'
},
{
  'id': 3,
  'image': 'https://placehold.co/64/64/black',
  'name': '이정재',
  'birthday': '991230',
  'gender': '남자',
  'job': '배우'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          );
        })
      }
    </div>
    
  );
}

export default App;
