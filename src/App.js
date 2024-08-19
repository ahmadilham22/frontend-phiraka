import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import FibonacciTable from './components/Fibonacci';
import Login from './components/Login';
import UserList from './components/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<UserList />} />
        <Route path="/" element={<Login />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/fibonaci" element={<FibonacciTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
