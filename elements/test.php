<!-- Form 1 -->
<!-- <form action="process.php" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" name="submit_form1" value="Submit Form 1">
</form> -->

<!-- Form 2 -->
<!-- <form action="process.php" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    
    <input type="submit" name="submit_form2" value="Submit Form 2">
</form> -->



<!-- php starts here -->

<!-- /*if (isset($_POST['submit_form1'])) {
    // Handle Form 1 data
    $name = $_POST['name'];
    $email = $_POST['email'];

    echo "Form 1 submitted.<br>";
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
}

if (isset($_POST['submit_form2'])) {
    // Handle Form 2 data
    $username = $_POST['username'];
    $password = $_POST['password']; // In a real case, do not echo or store plain passwords.

    echo "Form 2 submitted.<br>";
    echo "Username: " . htmlspecialchars($username) . "<br>";
    echo "Password: " . htmlspecialchars($password) . "<br>";
}*/ -->

<?php
if (isset($_POST['full_name'])){
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $last_name = $_POST['last_name'];

    echo "First Name: " . htmlspecialchars($first_name) . "<br>";
    echo "Middle Name: " . htmlspecialchars($middle_name) . "<br>";
    echo "Last Name: " . htmlspecialchars($last_name) . "<br>";
}
?>