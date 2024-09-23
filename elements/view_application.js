// // Function to display the application details
// function displayApplicationDetails() {
//     const applicationDetails = document.getElementById('applicationDetails');

//     // Retrieve data from localStorage
//     const know = localStorage.getItem('knowAboutExam');
//     const personalData = JSON.parse(localStorage.getItem('personalData')) || {};

//     // Display the data
//     applicationDetails.innerHTML = `
//         <h3>Personal Details</h3>
//         <p><strong>Enrollment ID:</strong> ${personalData.enrollment || 'N/A'}</p>
//         <p><strong>Name:</strong> ${personalData.name || 'N/A'}</p>
//         <p><strong>Email:</strong> ${personalData.email || 'N/A'}</p>
//         <p><strong>Mobile Number:</strong> ${personalData.mobileNumber || 'N/A'}</p>
//         <p><strong>Date of Birth:</strong> ${personalData.dob ? `${personalData.dob.day}/${personalData.dob.month}/${personalData.dob.year}` : 'N/A'}</p>
//         <p><strong>Gender:</strong> ${personalData.gender || 'N/A'}</p>
//         <p><strong>Nationality:</strong> ${personalData.nationality || 'N/A'}</p>
//         <p><strong>How did you come to know about the Exam:</strong> ${know || 'N/A'}</p>
//         <!-- Add more fields as needed -->
//     `;
// }

// // Event listener for the edit button
// document.getElementById('editBtn').addEventListener('click', function() {
//     redirectTo('upload_documents.html'); // Redirect back to the form page
// });

// // Call the function to display application details
// displayApplicationDetails();


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
        country: localStorage.getItem('country'),
        state: localStorage.getItem('state'),
        photoId: localStorage.getItem('photoId'),
        photoIdNumber: localStorage.getItem('photoIdNumber'),
        parentName: localStorage.getItem('parentName'),
        relationship: localStorage.getItem('relationship'),
        parentNationality: localStorage.getItem('parentNationality'),
        parentMobile: localStorage.getItem('parentMobile')
    };

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
            <p><strong>Country:</strong> ${personalData.country}</p>
            <p><strong>State:</strong> ${personalData.state}</p>
            <p><strong>Photo ID:</strong> ${personalData.photoId}</p>
            <p><strong>Photo ID Number:</strong> ${personalData.photoIdNumber}</p>
            <p><strong>Parent Name:</strong> ${personalData.parentName}</p>
            <p><strong>Relationship:</strong> ${personalData.relationship}</p>
            <p><strong>Parent Nationality:</strong> ${personalData.parentNationality}</p>
            <p><strong>Parent Mobile:</strong> ${personalData.parentMobile}</p>
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
