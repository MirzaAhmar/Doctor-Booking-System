import React from 'react'

const DoctorAbout = () => {
    return (
        <section>
            <div className='dr_About'>
                <h4>About of <span>Talha Aslam</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste laudantium ex nisi necessitatibus nihil aperiam fugiat voluptatibus a culpa nulla ratione vitae, perferendis repellat nemo dicta laborum sed cumque. Necessitatibus eligendi qui veritatis quia explicabo, saepe dicta. Nemo, perferendis! Beatae, aspernatur nobis saepe possimus id a quaerat aperiam distinctio.</p>
            </div>
            <div className='qualification mt-5'>
                <h4>Qualification</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Institute</th>
                            <th>Degree</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rawalpindi Medical College, Pakistan</td>
                            <td>MBBS</td>
                        </tr>
                        <tr>
                            <td>College of Physicians & Surgeons Pakistan</td>
                            <td>FCPS (Dermatology)</td>
                        </tr>
                        <tr>
                            <td>American Academy of Aesthetic Medicine</td>
                            <td>CAAAM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='qualification mt-5'>
                <h4>Experience</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Institute</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>King Edward Medical University / Mayo Hospital, Lahore</td>
                            <td>Assistant Professor of Dermatology</td>
                        </tr>
                        <tr>
                            <td>King Edward Medical University / Mayo Hospital, Lahore</td>
                            <td>Senior Registrar</td>
                        </tr>
                        <tr>
                            <td>King Edward Medical University / Mayo Hospital, Lahore</td>
                            <td>Senior Registrar</td>
                        </tr>
                        <tr>
                            <td>King Edward Medical University / Mayo Hospital, Lahore</td>
                            <td>Senior Registrar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default DoctorAbout
