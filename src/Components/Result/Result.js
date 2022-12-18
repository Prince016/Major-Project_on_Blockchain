import React from 'react'
import Table from 'react-bootstrap/Table';
import '../Result/result.css'

const Result = () => {
    return (
        <div className='content'>
            <div className='heading'>

                <h2>Bachelor Of Technology</h2>
                <h3>Detailed Grade Sheet</h3>
                <h6>Computer Science Engineering</h6>
            </div>

            <div className='about_user'>

                <p className='sem_year'>1st Semester Examination December</p><br /><br />

                <table className='' cellspacing="15">
                    <tr>
                        <td>Name</td>
                        <td>&emsp;:</td>
                        <td> &emsp;Rahul Aggarwal</td>
                    </tr>
                    <tr>
                        <td>Enrolment No</td>
                        <td>&emsp;:</td>
                        <td> &emsp;22CSU000</td>
                    </tr>
                    <tr>
                        <td>Father's Name</td>
                        <td>&emsp;:</td>
                        <td> &emsp;Aman Aggarwal </td>
                    </tr>
                    <tr>
                        <td>Mother's Name</td>
                        <td>&emsp;:</td>
                        <td> &emsp;Shruti Aggarwal</td>
                    </tr>
                </table>
            </div>

            <div className='details_marksheet'>

                <Table border="4px" className='table_content' striped bordered hover >
                    <thead>
                        <tr>
                            <th>S.NO.</th>
                            <th>COURSE</th>
                            <th>CODE</th>
                            <th>CREDITS</th>
                            <th>GRADE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Engineering Chemistry</td>
                            <td>CHL150</td>
                            <td>2</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Engineering Chemistry</td>
                            <td>CHL150</td>
                            <td>2</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Engineering Chemistry</td>
                            <td>CHL150</td>
                            <td>2</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Engineering Chemistry</td>
                            <td>CHL150</td>
                            <td>2</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Engineering Chemistry</td>
                            <td>CHL150</td>
                            <td>2</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Engineering Chemistry</td>
                            <td>CHL150</td>
                            <td>2</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Engineering Chemistry</td>
                            <td>CHL150</td>
                            <td>2</td>
                            <td>A</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className='about_user'>
            <h6>SEMESTER - 1 : </h6>
            <table className='' cellspacing="15">
                    <tr>
                        <td>TOTAL CREDITS EARNED UPTO I SEMESTER</td>
                        <td>&emsp;:</td>
                        <td> &emsp;&emsp;20</td>
                    </tr>
                    <tr>
                        <td>SEMESTER GRADE POINT AVERAGE(SGPA)</td>
                        <td>&emsp;:</td>
                        <td> &emsp;&emsp;9.5</td>
                    </tr>
                    <tr>
                        <td>CUMULATIVE GRADE POINT AVERAGE(CGPA)</td>
                        <td>&emsp;:</td>
                        <td> &emsp;&emsp;9.6 </td>
                    </tr>
                    
                </table>
             </div>

        </div>
    )
}

export default Result