<?php
include('connect.php');
$id = $_GET['id'];
$query = mysqli_query($con,"SELECT * FROM data_movie WHERE id =$id");
$result = mysqli_fetch_array($query);
?>

<html>

<head>
    <title><?=$result['name']?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
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
                    <li class="breadcrumb-item"><a href="./">หน้าแรก</a></li>
                    <li class="breadcrumb-item active" aria-current="page"><?=$result['name']?></li>
                </ol>
            </nav>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col-md-3">
                    <div class="card mb-4 shadow-sm">
                        <img src="<?=$result['img']?>" while="100%" height="380" class="card-img-top" />
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="card shadow-sm">
                        <iframe width="100%" height="380" src="https://www.youtube.com/embed/<?=$result['vdo_ex']?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col-md-12">
                    <div class="card shadow-sm text-center"style="background-color: #9e2222!important;"><h3>Player</h3></div>
                        <div class="card mb-4 shadow-sm">
                            <iframe width="100%" height="623" src="https://www.youtube.com/embed/<?=$result['vdo_main']?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <footer class="blog-footer text-center" style="padding: 5px;background-color: #414d74;">
            <p style="margin:0; color:aliceblue">เช่าดูหนังออนไลน์ ที่นี้เลย<a href="./" style="color:#ff9e9e"> Movie </a></p>
        </footer>
</body>

</html>