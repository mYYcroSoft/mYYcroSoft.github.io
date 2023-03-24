<?php

/*


$folder = mkdir('storage/' . $number, 0777, true);

$path = "storage/". $number . "/data_" . rand(1,255) . ".txt" ;
$new_file = fopen($path, 'w');
fwrite($new_file, "This is a new folder");


echo file_get_contents($path, true);
*/
$number = 'arch_' . rand(2,255);
$files = scandir('storage/');

foreach ($files as $f) {
    echo $f . '<br>';
}



$data = array (
    "product_name" => "sfm_ai",
    "product_id" => $number,

);

$file = 'storage/arch_86/data_167.txt';
file_put_contents($file, serialize($data));

//file_put_contents("storage/arch_86/data_167.txt", print_r($data, true));

// Načte data ze souboru
$my_data = unserialize(file_get_contents($file));

// Vypíše data pomocí foreach smyčky
foreach ($my_data as $key => $value) {
    echo $key . ': ' . $value . '<br>';
}

?>