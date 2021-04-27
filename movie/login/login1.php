
<body>
    <div class="container">
        <a href="index.php" class="btn btn-primary mt-3">Movie</a>
        <hr>
        <h1 class="mt-5">login Page</h1>
        <hr>
        <form action="" method="post">
            <div>
                <label for="Username">Username</label>
                <input type="text" name="Username" required>
            </div>

            <div>
                <label for="Password">Password</label>
                <input type="text" name="Password" value="" required>
            </div>
            <button type="submit" name="insert" class="btn btn-success">login</button>
        </form>
    </div>

    <?php
    include_once('functions.php');
    $insertdata = new DB_con();

    if(isset($_POST['insert'])){
    $Username = $_POST['Username'];
    $Password = $_POST['Password'];

    $sql = mysqli_query($conn, "SELECT Username,Password FROM data_user WHERE Username = '$Username' AND Password = '$Password'");
    $row = mysqli_fetch_array($sql);

    

    /*if($sql){
        echo "<script>alert('Record Inserted Successfully!');</script>";
        echo "<script>window.location.href='register.php'</script>";
    }*/
    
}
    ?>