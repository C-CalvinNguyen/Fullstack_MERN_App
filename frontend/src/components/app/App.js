import './App.css';
import Employee from '../Employee/Employee';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import EmployeeView from '../Employee/EmployeeDetails/EmployeeView';
import EmployeeUpdate from '../Employee/EmployeeUpdate/EmployeeUpdate';
import EmployeeAdd from '../Employee/EmployeeAdd/EmployeeAdd';

function App() {
  return (
    <div>
      <BrowserRouter>
          <div style={{
            backgroundColor: "grey", width: 500, height: 50, border: "solid", display:"flex",
            marginLeft: "auto", marginRight:"auto", textAlign:"center"}}>
            <Link to={`/`} style={{
              backgroundColor: "lightgrey", padding:5, margin: "auto",
              border: "solid", borderWidth: 3, borderColor: "black", textDecoration: "none", color: "black"}}
              >Employee Main Page</Link>
          </div>
          <div style={{
            textAlign:'center', width: 500, padding:0, marginLeft: "auto", 
            marginRight:"auto", border: "solid"}}>
          <Routes>
            <Route path={"/"} element={<Employee/>} />
            <Route path="/view-employee/:id" element={<EmployeeView />}/>
            <Route path="/add-employee/:id" element={<EmployeeUpdate />}/>
            <Route path="/add-employee/_add" element={<EmployeeAdd />}></Route>
          </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
