let students = [
    { name: 'Thimira Nirmal', gender: 'Male', dob: '1997-03-28', address: 'Hanwella', contact: '071-4343368' },
    { name: 'Sashini Perera', gender: 'Female', dob: '2000-05-12', address: 'Homagama', contact: '071-4567435' }
    //{ name: 'Asela Dewanarayana', gender: 'Male', dob: '1997-03-28', address: 'Maharagama', contact: '077-5432567' },
    //{ name: 'Manesh Tharuka', gender: 'Male', dob: '1997-06-08', address: 'Bandaragama', contact: '077-5643676' }
];

function loadStudents() {
    let arrayData = '';
    students.map((val, index) => {
        arrayData += `<div class="item">
            <div class="card" style="width: 18rem;">
                <div class="card-img-top">
                    <img class="stu-image" src="./Assets/${val.gender} student.png" alt="">
                </div>
                <div class="card-body">
                    <table class="details">
                        <tr>
                            <td>Student Name</td>
                            <td>-</td>
                            <td>${val.name}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>-</td>
                            <td>${val.gender}</td>
                        </tr>
                        <tr>
                            <td>DOB</td>
                            <td>-</td>
                            <td>${val.dob}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>-</td>
                            <td>${val.address}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>-</td>
                            <td>${val.contact}</td>
                        </tr>
                    </table>
                    <button class="btn btn-danger" onclick="removeStudent(${index})">Delete</button>
                </div>
            </div>
        </div>`
    });
    document.getElementById('detailsStudents').innerHTML = arrayData;
}

loadStudents();

function addStudent(){
    const name = document.getElementById('stuName').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    //addStudent(name,gender,dob,address,contact);

    const newStudent = { name, gender, dob, address, contact };
    students.push(newStudent);
    loadStudents();
    document.getElementById('studentForm').reset();
}

function removeStudent(index) {
    students.splice(index,1)
    loadStudents();
}