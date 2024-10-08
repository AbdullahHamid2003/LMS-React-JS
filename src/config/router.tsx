import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminDashboard from '../screens/adminDashboard';
import Signup from '../screens/signup';
import Login from '../screens/login';

export default function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
                
                <Route path="/admindashboard/*" element={<AdminDashboard/>}/>
                <Route path="/" element={<Signup/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </Router>
        </>
    )
}