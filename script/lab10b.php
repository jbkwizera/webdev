<?php
$password = $_REQUEST[q];
$returnValue = "";

if ($password == "1234") {
    $returnValue = "The rice needs tending.";
}
else {
    $returnValue = "invalid";
}
print $returnValue;
?>
