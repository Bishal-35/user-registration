document.addEventListener("DOMContentLoaded", function () {
    const applicationDetails = document.getElementById('applicationDetails');

    // Retrieve data from localStorage
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));
    const examData = {
        selectedModule: localStorage.getItem('selectedModule'),
        city1: localStorage.getItem('city1'),
        city2: localStorage.getItem('city2'),
        city3: localStorage.getItem('city3')
    };
    const personalData = {
        enrollment: localStorage.getItem('enrollment'),
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        mobileNumber: localStorage.getItem('mobileNumber'),
        dob: JSON.parse(localStorage.getItem('dob')),
        gender: localStorage.getItem('gender'),
        nationality: localStorage.getItem('nationality'),
        category: localStorage.getItem('category'),
        disability: localStorage.getItem('disability'),
        nationality: localStorage.getItem('nationality'),
        photoID: localStorage.getItem('photoID'),
        photoIDNumber: localStorage.getItem('photoIDNumber'),
        parentName: localStorage.getItem('parentName'),
        relationship: localStorage.getItem('relationship'),
        parentNationality: localStorage.getItem('parentNationality'),
        parentMobile: localStorage.getItem('parentMobile')
    };
    const addressData ={
        pin: localStorage.getItem('pincode'),
        country: localStorage.getItem('country'),
        state: localStorage.getItem('state'),
        address1: localStorage.getItem('address1'),
        address2: localStorage.getItem('address2'),
        address3: localStorage.getItem('address3'),
        city: localStorage.getItem('city')
    };
    const eduData ={
        school_mat: localStorage.getItem('school-mat'),
        city_mat: localStorage.getItem('city-mat'),
        state_mat: localStorage.getItem('state-mat'),
        pincode_mat: localStorage.getItem('pincode-mat'),
        passed_mat: localStorage.getItem('passed-mat'),
        marks_mat: localStorage.getItem('marks-mat'),

        school_sec: localStorage.getItem('school-sec'),
        city_sec: localStorage.getItem('city-sec'),
        state_sec: localStorage.getItem('state-sec'),
        pincode_sec: localStorage.getItem('pincode-sec'),
        passed_sec: localStorage.getItem('passed-sec'),
        marks_sec: localStorage.getItem('marks-sec'),
    }

// Function to display data
function displayData() {
    applicationDetails.innerHTML = `
        <h3>Personal Details</h3>
        <p><strong>Enrollment:</strong> <span style="text-transform: uppercase;">${personalData.enrollment}</span></p>
        <p><strong>Name:</strong> <span style="text-transform: uppercase;">${personalData.name}</span></p>
        <p><strong>Email:</strong> <span style="text-transform: lowercase;">${personalData.email}</span></p>
        <p><strong>Mobile Number:</strong> <span style="text-transform: uppercase;">${personalData.mobileNumber}</span></p>
        <p><strong>Date of Birth:</strong> <span style="text-transform: uppercase;">${personalData.dob ? `${personalData.dob.day}/${personalData.dob.month}/${personalData.dob.year}` : 'N/A'}</span></p>
        <p><strong>Gender:</strong> <span style="text-transform: uppercase;">${personalData.gender}</span></p>
        <p><strong>Nationality:</strong> <span style="text-transform: uppercase;">${personalData.nationality}</span></p>
        <p><strong>Category:</strong> <span style="text-transform: uppercase;">${personalData.category}</span></p>
        <p><strong>Disability:</strong> <span style="text-transform: uppercase;">${personalData.disability}</span></p>
        <p><strong>Photo ID:</strong> <span style="text-transform: uppercase;">${personalData.photoID}</span></p>
        <p><strong>Photo ID Number:</strong> <span style="text-transform: uppercase;">${personalData.photoIDNumber}</span></p>
        <p><strong>Parent Name:</strong> <span style="text-transform: uppercase;">${personalData.parentName}</span></p>
        <p><strong>Relationship:</strong> <span style="text-transform: uppercase;">${personalData.relationship}</span></p>
        <p><strong>Parent Nationality:</strong> <span style="text-transform: uppercase;">${personalData.parentNationality}</span></p>
        <p><strong>Parent Mobile:</strong> <span style="text-transform: uppercase;">${personalData.parentMobile}</span></p>

        <h3>Exam Data</h3>
        <p><strong>Selected Module:</strong> <span style="text-transform: uppercase;">${examData.selectedModule}</span></p>
        <p><strong>City 1:</strong> <span style="text-transform: uppercase;">${examData.city1}</span></p>
        <p><strong>City 2:</strong> <span style="text-transform: uppercase;">${examData.city2}</span></p>
        <p><strong>City 3:</strong> <span style="text-transform: uppercase;">${examData.city3}</span></p>

        <h3>Communication Details</h3>
        <p><strong>Pin Code:</strong> <span style="text-transform: uppercase;">${addressData.pin}</span></p>
        <p><strong>Country:</strong> <span style="text-transform: uppercase;">${addressData.country}</span></p>
        <p><strong>State/Union Territory:</strong> <span style="text-transform: uppercase;">${addressData.state}</span></p>
        <p><strong>Address:</strong> <span style="text-transform: uppercase;">${addressData.address1 ? `${addressData.address1}, ${addressData.address2}, ${addressData.address3}` : 'N/A'}</span></p>
        <p><strong>City/Town:</strong> <span style="text-transform: uppercase;">${addressData.city}</span></p>

        <h3>Educational Qualifications</h3>
        <p><strong>Name of School:</strong> <span style="text-transform: uppercase;">${eduData.school_mat}</span></p>
        <p><strong>City/Town:</strong> <span style="text-transform: uppercase;">${eduData.city_mat}</span></p>
        <p><strong>State/Union Territory:</strong> <span style="text-transform: uppercase;">${eduData.state_mat}</span></p>
        <p><strong>Pincode:</strong> <span style="text-transform: uppercase;">${eduData.pincode_mat}</span></p>
        <p><strong>Passed Out:</strong> <span style="text-transform: uppercase;">${eduData.passed_mat}</span></p>
        <p><strong>Marks in %:</strong> <span style="text-transform: uppercase;">${eduData.marks_mat}</span></p>

        <p style="margin-top: 40px;"><strong>Name of Higher Secondary School:</strong> <span style="text-transform: uppercase;">${eduData.school_sec}</span></p>
        <p><strong>City/Town:</strong> <span style="text-transform: uppercase;">${eduData.city_sec}</span></p>
        <p><strong>State/Union Territory:</strong> <span style="text-transform: uppercase;">${eduData.state_sec}</span></p>
        <p><strong>Pincode:</strong> <span style="text-transform: uppercase;">${eduData.pincode_sec}</span></p>
        <p><strong>Passed Out:</strong> <span style="text-transform: uppercase;">${eduData.passed_sec}</span></p>
        <p><strong>Marks in %:</strong> <span style="text-transform: uppercase;">${eduData.marks_sec}</span></p>
    `;
}


    displayData();

    // Add event listeners for buttons
    document.getElementById('editBtn').addEventListener('click', function () {
        window.location.href = ('exam.html'); // Redirect to exam page to edit
    });
});


