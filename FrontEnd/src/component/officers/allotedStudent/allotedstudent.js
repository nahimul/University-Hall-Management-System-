import React from 'react';
import './allotedstudent.css'

const AllotedStudent=()=>{

    const student={
        roll:'1911077121',
        name:'Nahimul Islam',
        room:'140 C',
        mobile:'01774366602',
        allotedForm:'January 2020',
        allotedExpire:'January 2025',
    };
    const Tr=()=>{return(<tr>
        <td>{student.roll}</td>
        <td>{student.name}</td>
        <td>{student.room}</td>
        <td>{student.mobile}</td>
        <td>{student.allotedForm}</td>
        <td>{student.allotedExpire}</td>
        <td></td>
      </tr>);}
    
    return(

   <div className="students">
     <table className='students-table'>
            <tbody>
              <tr>
                <th>ROLL NO</th>
                <th>STUDENT NAME</th>
                <th>ROOM NO</th>
                <th>MOBILE NO</th>
                <th>FEE INFO</th>
                <th>EXPIRE</th>
                <th>ACTION</th>
              </tr>
              {}
              <Tr/>
              <Tr/>
            </tbody>
          </table>
   </div>
    );
};

export default AllotedStudent;