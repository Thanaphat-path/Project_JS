<?php

if (isset($_POST['Btnindex'])) {
  $userid = $_POST['id'];

include('connect.php');
$num_rows = mysqli_num_rows(mysqli_query($con, "SELECT * FROM data_movie"));

$limit_page = 4;
$page = @$_GET['Page'] ? $_GET['Page'] : 1;

$num_page = $num_rows / $limit_page;
if (!($num_page == (int)$num_page))
    $num_page = (int)$num_page + 1;
    if ($page > $num_page)
    $page = $num_page;
$limit_start = ($page * $limit_page) - $limit_page
?>

<html>

<head>
    <title> Movie </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #396086!important;">
        <div class="container-fluid">
            <a class="navbar-brand" href="./">Movie</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./">หน้าแรก</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ยอดนิยม</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            หมวดหมู่
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">พากย์ไทย</a></li>
                            <li><a class="dropdown-item" href="#">ซัพไทย</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">การ์ตูน</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">ติดต่อสอบถาม</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="ค้นหา" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">ค้นหา</button>
                </form>
            </div>
        </div>
    </nav>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://image.freepik.com/free-vector/movie-vector-trendy-banner_36298-505.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://collider.com/wp-content/uploads/inception_movie_poster_banner_04.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://i.pinimg.com/originals/93/95/35/93953574458150cbdff724c6bacb8dd6.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>


    <div class="album py-5 bg-light" style="background-color: #0e0e0e!important;">
        <div class="container">


            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">หน้าแรก</a></li>
                    <li class="breadcrumb-item active" aria-current="page">ล่าสุด</li>
                </ol>
            </nav>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <?php

                $query = mysqli_query($con, "SELECT * FROM data_movie ORDER BY id DESC LIMIT $limit_start,$limit_page");
                while ($result = mysqli_fetch_array($query)) {
                ?>
                    <div class="col-md-3">
                        <div class="card shadow-sm">
                            <a href="./play.php?id=<?= $result['id'] ?>">
                                <img src=<?= $result['img'] ?> while="100%" height="380" class="card-img-top" />
                                <div class="card-body">
                                    <p class="card-text text-center"style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><?= $result['name'] ?></p>
                                </div>
                            </a>
                        </div>
                    </div>
                <?php } ?>
            </div>
            <br>
            <nav aria-label="...">
                <ul class="pagination justify-content-center">
                    <!------------------------------------------------------------------->
                    <?php
                    if ($page <= 1) {
                    ?>
                        <li class="page-item disabled">
                            <span class="page-link">ก่อน</span>
                        </li>
                    <?php
                    } else {
                    ?>
                        <li class="page-item ">
                            <a class="page-link" href="?Page=<?= $page - 1 ?>">ก่อน</a>
                        </li>
                    <?php

                    }
                    ?>
                    <!------------------------------------------------------------------->
                    <?php
                    if ($page > 2) {
                    ?>
                        <li class="page-item ">
                            <a class="page-link" href="?Page=1">1</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link">...</a>
                        </li>
                    <?php
                    }
                    ?>

                    <!------------------------------------------------------------------->

                    <?php
                    
                    if($page >= 2){
                        if ($page <= 2) {
                            $num_start = 1;
                            $num_stop = 2;
                        } elseif ($page > $num_page - 1) {
                            $num_start = $num_page - 1;
                            $num_stop = $num_page;
                        } else {
                            $num_start = $page - 1;
                            $num_stop = $page + 1;
                        }
                    }else{
                        $num_start = 1;
                        $num_stop = $num_page;
                    }
                   
                    for ($i = $num_start; $i <= $num_stop; $i++) {
                        if ($page == $i) {
                    ?>
                            <li class="page-item active" aria-current="page">
                                <span class="page-link"><?= $i ?></span>
                            </li>
                        <?php
                        } else {
                        ?>
                            <li class="page-item"><a class="page-link" href="?Page=<?= $i ?>"><?= $i ?></a></li>
                    <?php
                        }
                    }
                    ?>

                    <!------------------------------------------------------------------->
                    <?php
                    if ($page < $num_page - 1) {
                    ?>
                        <li class="page-item disabled">
                            <a class="page-link">...</a>
                        </li>
                        <li class="page-item ">
                            <a class="page-link" href="?Page=<?= $num_page ?>"><?= $num_page ?></a>
                        </li>

                    <?php
                    }
                    ?>
                    <!------------------------------------------------------------------->
                    <?php
                    if ($page >= $num_page) {
                    ?>
                        <li class="page-item disabled">
                            <span class="page-link">หลัง</span>
                        </li>
                    <?php
                    } else {
                    ?>
                        <li class="page-item ">
                            <a class="page-link" href="?Page=<?= $page + 1 ?>">หลัง</a>
                        </li>
                    <?php

                    }
                    ?>

                    <!------------------------------------------------------------------->
                </ul>
            </nav>

        </div>
    </div>
    <footer class="blog-footer text-center" style="padding: 5px;background-color: #414d74;">
        <p style="margin:0; color:aliceblue">เช่าดูหนังออนไลน์ ที่นี้เลย<a href="./" style="color:#ff9e9e"> Movie </a></p>
    </footer>
</body>

</html>
<?php
}else {
  echo "<script>window.location.href = 'login/login.php';</script>";
} ?>