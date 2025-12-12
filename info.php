<?php
<?php
// Déclaration de variables
$etablissement = "Université Exemple";
$module = "Web avancé";
$annee = 2025;

$nombre1 = 12;
$nombre2 = 7;
$addition = $nombre1 + $nombre2;
$multiplication = $nombre1 * $nombre2;
?>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Info PHP</title>
  <style>
    body{font-family:Arial,Helvetica,sans-serif;max-width:900px;margin:2rem auto;padding:1rem}
    .card{background:#fff;padding:1rem;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.06)}
  </style>
</head>
<body>
  <div class="card">
    <h1>Informations PHP</h1>
    <p><strong>Établissement :</strong> <?php echo $etablissement; ?></p>
    <p><strong>Module :</strong> <?php echo $module; ?></p>
    <p><strong>Année :</strong> <?php echo $annee; ?></p>

    <h2>Exemples de variables et calculs</h2>
    <p>Nombre 1: <?php echo $nombre1; ?></p>
    <p>Nombre 2: <?php echo $nombre2; ?></p>
    <p>Addition (<?php echo $nombre1; ?> + <?php echo $nombre2; ?>) = <?php echo $addition; ?></p>
    <p>Multiplication (<?php echo $nombre1; ?> × <?php echo $nombre2; ?>) = <?php echo $multiplication; ?></p>
  </div>
</body>
</html>