<?php
require_once("car.php");
require_once("UberX.php");
require_once("uberPool.php");
require_once("account.php");

$uberX = new UberX("CVB123", new Account("Andres Herrera", "AND456"), "Chevrolet", "Spark");
$uberX->printDataCar();
$uberPool = new UberPool("TYU567", new Account("Andrea Ferran", "ANDA765"), "mazda", "seis");
$uberPool->printDataCar();
$uberVan = new UberVan("OJL395", new Account("Raul Ramirez", "AND457"), "nissan", "Versa");
$uberVan->setPassenger(6);
$uberVan->printDataCar();

?>