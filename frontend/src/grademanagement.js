import React ,{useState}from "react";
import "./grademanagement.css";

export default function Home() {


        const [formState, setFormState] = useState({
          idNo: '',
          studentName: '',
          tpPlsGrade: 'Above Average', // Default value
          seminarGrade: 'Good', // Default value
          thesisGrade: 'Satisfactory', // Default value
          supervisorSignature: null
        });
      
        const handleChange = (event) => {
          const { name, value, files } = event.target;
          if (files) {
            setFormState(prevState => ({ ...prevState, [name]: files[0] }));
          } else {
            setFormState(prevState => ({ ...prevState, [name]: value }));
          }
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(formState);
          // Handle form submission, like sending data to a server
        };
      

    return (
        <div className="parentgrademanagement">
            <div className="titlebar">
                <div className="bitslogobox">
                    <img src="./pics/bitslogo.webp" alt="bitslogo"></img>
                </div>
                <div className="navbox"></div>
                <div className="currentuser">
                    <p>GRADE MANAGEMENT</p>
                </div>
                <div className="bitsflagline"></div>
            </div>
            <div className="maincontent">
            <div className="container">
      <h2>Enter Ph.D. Student Grades</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idNo">Id No:</label>
        <input type="text" id="idNo" name="idNo" value={formState.idNo} onChange={handleChange} />
        
        <label htmlFor="studentName">Name of Ph.D. Student:</label>
        <input type="text" id="studentName" name="studentName" value={formState.studentName} onChange={handleChange} />
        
        <label htmlFor="tpPlsGrade">TP-1 / PLS-1 Grade:</label>
        <select id="tpPlsGrade" name="tpPlsGrade" value={formState.tpPlsGrade} onChange={handleChange}>
            <option>Above Average</option>
            <option>Average</option>
            <option>Below Average</option>
            <option>NC</option>
        </select>
        
        <label htmlFor="seminarGrade">Seminar / Independent Study Grade:</label>
        <select id="seminarGrade" name="seminarGrade" value={formState.seminarGrade} onChange={handleChange}>
            <option>Good</option>
            <option>Poor</option>
            <option>NC</option>
        </select>
        
        <label htmlFor="thesisGrade">Thesis Grade:</label>
        <select id="thesisGrade" name="thesisGrade" value={formState.thesisGrade} onChange={handleChange}>
            <option>Satisfactory</option>
            <option>Unsatisfactory</option>
            <option>NC</option>
        </select>
        
        <label htmlFor="supervisorSignature">Upload Signature:</label>
        <input type="file" id="supervisorSignature" name="supervisorSignature" onChange={handleChange} />
        
        <button type="submit">Save</button>
      </form>
    </div>
  

            </div>
        </div>
    );
}
