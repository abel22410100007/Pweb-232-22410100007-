<!DOCTYPE html>
<html>
<body>

<form>
    UTS:
    <input type = "number" name = "nilai1" id = "nilai1">
    <br>
    UAS:
    <input type = "number" name = "nilai2" id = "nilai2">
    <br>
    TUGAS:
    <input type = "number" name = "nilai3" id = "nilai3">
    <br>
    <button type = "button" onclick = "myfungsi()"> tambah </button>
    <br>
    <input type = "text" id = "isi">
</form>

<script>
    function myfungsi()
    {
        // Mendapatkan nilai dari input
    let nilai1 = parseInt(document.getElementById("nilai1").value);
    let nilai2 = parseInt(document.getElementById("nilai2").value);
    let nilai3 = parseInt(document.getElementById("nilai3").value);

    // Menghitung total nilai dengan bobot
    let totalNilai = (nilai1 * 0.3) + (nilai2 * 0.3) + (nilai3 * 0.4);

    if (totalNilai >= 80) {
        document.getElementById("isi").value= "A";
    } else if (totalNilai >=70) {
        document.getElementById("isi").value= "B";
    } else {
        document.getElementById("isi").value= "C";
    }
    }
    
</script>

</body>
</html> 