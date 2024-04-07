
import Home from './Home.jsx';
import Student from './Student.jsx';
import Admin from './admin.js';
import UserManag from './usermanagement.js'
import Faculty from './faculty.js'
import GradeMan from './grademanagement.js'
import Maintain from './underconstruction.js';

// import Studentcourses from './studentcourses.js'
// import Studentprojects from './studentprojects.js'
import Studentgrades from './studentgrades.js'
// import Studentthesis from './studentthesis.js'

// import Project11 from './cardmenu2.js';
// import Films from './filmspage.jsx';
// import Intro from './intro.jsx'

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        {/* <Route path='/studentcourses' element={<Studentcourses/>}/> */}
        <Route path='/studentgrades' element={<Studentgrades/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/usermanagement' element={<UserManag/>}/>
        <Route path='/faculty' element={<Faculty/>}/>
        <Route path='/grademanagement' element={<GradeMan/>}/>
        <Route path='/maintenance' element={<Maintain/>}/>


        {/* <Route path='/studentprojects' element={<Studentprojects/>}/>
        <Route path='/studentthesis' element={<Studentthesis/>}/>  */}


        {/* <Route path='/films' element={<Films/>}/> */}
        {/* <Route path='/intro' element={<Intro/>}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
