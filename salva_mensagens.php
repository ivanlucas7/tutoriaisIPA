<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);

    //  Arquivo
    $file = 'mensagens.txt';

    
    $content = "Nome: $name\nMensagem: $message\n\n";

    // Salvar os dados no arquivo
    if (file_put_contents($file, $content, FILE_APPEND | LOCK_EX)) {
        echo "Mensagem salva com sucesso!";
    } else {
        echo "Falha ao salvar a mensagem.";
    }
}
?>
