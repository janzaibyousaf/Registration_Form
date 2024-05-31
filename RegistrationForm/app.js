var firebaseConfig = {
    apiKey: "AIzaSyBf89qvHkmpYoA4wOCvTCNk_Z4oh2Fu_Vo",
    authDomain: "registration-form-7cbf0.firebaseapp.com",
    databaseURL: "https://registration-form-7cbf0-default-rtdb.firebaseio.com",
    projectId: "registration-form-7cbf0",
    storageBucket: "registration-form-7cbf0.appspot.com",
    messagingSenderId: "606600119900",
    appId: "1:606600119900:web:7f8f10b9ca668b8795c899"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();


var studentsRef = database.ref('students');


document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var course = document.getElementById('course').value;

    var newStudentRef = studentsRef.push();
    newStudentRef.set({
        name: name,
        email: email,
        course: course
    });

    document.getElementById('studentForm').reset();
    alert('Student Registered Successfully!');
});


document.getElementById('showStudents').addEventListener('click', function() {
    studentsList.innerHTML = ''; 
    studentsRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var student = childSnapshot.val();
            var studentDiv = document.createElement('div');
            studentDiv.className = 'card mb-3';
            studentDiv.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${student.name}</h5>
                    <p class="card-text">Email: ${student.email}</p>
                    <p class="card-text">Course: ${student.course}</p>
                </div>
            `;
            studentsList.appendChild(studentDiv);
        });
    });
});



 