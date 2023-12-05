<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email from the form
    $email = $_POST['email'];

    // Validate email (you may want to add more robust email validation)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Please enter a valid email address.';
        exit;
    }

    // Save the email to the database (you need to set up your database connection)
    $servername = "your_database_server";
    $username = "your_database_username";
    $password = "your_database_password";
    $dbname = "your_database_name";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert the email into the database
    $stmt = $conn->prepare("INSERT INTO subscriptions (email) VALUES (?)");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->close();

    $conn->close();

    // Send a success message to the client
    echo 'Thank you for subscribing!';
} else {
    // If the form is not submitted, return an error message
    echo 'Invalid request.';
}
?>
