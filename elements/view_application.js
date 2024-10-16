//JS needs to be corrected aas no data is displayed 

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
            <h3>Exam Data</h3>
            <p><strong>Selected Module:</strong> ${examData.selectedModule}</p>
            <p><strong>City 1:</strong> ${examData.city1}</p>
            <p><strong>City 2:</strong> ${examData.city2}</p>
            <p><strong>City 3:</strong> ${examData.city3}</p>

            <h3>Personal Details</h3>
            <p><strong>Enrollment:</strong> ${personalData.enrollment}</p>
            <p><strong>Name:</strong> ${personalData.name}</p>
            <p><strong>Email:</strong> ${personalData.email}</p>
            <p><strong>Mobile Number:</strong> ${personalData.mobileNumber}</p>
            <p><strong>Date of Birth:</strong> ${personalData.dob ? `${personalData.dob.day}/${personalData.dob.month}/${personalData.dob.year}` : 'N/A'}</p>
            <p><strong>Gender:</strong> ${personalData.gender}</p>
            <p><strong>Nationality:</strong> ${personalData.nationality}</p>
            <p><strong>Category:</strong> ${personalData.category}</p>
            <p><strong>Disability:</strong> ${personalData.disability}</p>
            <p><strong>Nationality:</strong> ${personalData.nationality}</p>
            <p><strong>Photo ID:</strong> ${personalData.photoID}</p>
            <p><strong>Photo ID Number:</strong> ${personalData.photoIDNumber}</p>
            <p><strong>Parent Name:</strong> ${personalData.parentName}</p>
            <p><strong>Relationship:</strong> ${personalData.relationship}</p>
            <p><strong>Parent Nationality:</strong> ${personalData.parentNationality}</p>
            <p><strong>Parent Mobile:</strong> ${personalData.parentMobile}</p>

            <h3>Communication Details</h3>
            <p><strong>Pin Code: </strong> ${addressData.pin}</p>
            <p><strong>Country: </strong> ${addressData.country}</p>
            <p><strong>State/Union Territory: </strong> ${addressData.state}</p>
            <p><strong>Address: </strong> ${addressData.address1 ? `${addressData.address1},${addressData.address2},
                ${addressData.address3}` : 'N/A' }</p>
            <p><strong>City/Town: </strong> ${addressData.city}</p>

            <h3>Educational Qualifications</h3>
            <p><strong>Name of School: </strong> ${eduData.school_mat}</p>
            <p><strong>City/Town: </strong> ${eduData.city_mat}</p>
            <p><strong>State/Union Territory: </strong> ${eduData.state_mat}</p>
            <p><strong>Pincode: </strong> ${eduData.pincode_mat}</p>
            <p><strong>Passed Out: </strong> ${eduData.passed_mat}</p>
            <p><strong>Marks in %: </strong> ${eduData.marks_mat}</p>

            <p style="margin-top: 40px;"><p><strong>Name of Higher Secondary School: </strong> ${eduData.school_sec}</p>
            <p><strong>City/Town: </strong> ${eduData.city_sec}</p>
            <p><strong>State/Union Territory: </strong> ${eduData.state_sec}</p>
            <p><strong>Pincode: </strong> ${eduData.pincode_sec}</p>
            <p><strong>Passed Out: </strong> ${eduData.passed_sec}</p>
            <p><strong>Marks in %: </strong> ${eduData.marks_sec}</p>
        `;
    }

    displayData();

    // Add event listeners for buttons
    document.getElementById('editBtn').addEventListener('click', function () {
        window.location.href = 'exam.html'; // Redirect to exam page to edit
    });

    document.getElementById('submitBtn').addEventListener('click', function () {
        window.location.href = 'declaration.html'; // Go back to the previous page
    });
});


