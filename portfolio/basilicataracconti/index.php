<!DOCTYPE html>
<html class="noise">

<head>
  <title>Gallery</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,minimal-ui">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="msapplication-tap-highlight" content="no" />
  <base href="../">
  <link rel="stylesheet" href="style.css" />

  <!-- Fotorama -->
  <link href="fotorama.css" rel="stylesheet">

</head>

<body id="root" class="frontpage">

  <div class="body-wrap">

    <script>
    var Photos = {
      unsplash:
      {
        by:
        {
          href: '/',
          title: 'Gallery'
        },
        uuids: [
          <?php 

          $result = basename(__DIR__) ;
          $files =Array();
          foreach ((glob('*.png')) as $file){
          $files[]=$result."/".$file;
          }
          echo '"'.implode('","',$files).'"';
          ?>
        ]
      }
    }
    </script>

    <div class="fotorama-wrap-frontpage noise">
      <div id="fotorama"></div>
    </div>

    <!-- jQuery, -->
    <script src="jquery.min.js"></script>

    <script src="script.js"></script>

    <!-- Fotorama -->
    <script src="fotorama.js"></script>

</body>

</html>