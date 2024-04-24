<!DOCTYPE html>
<html lang="en">
<head>
    <title>Kuis 1</title>
    <link rel="stylesheet" href="kuis1.css">
    <script src="kuis1.js"></script>
</head>
<body>
    <h2>Menghitung volume dan luas balok, kubus, tabung</h2>
    <form>
        <br>
        <input type="checkbox" id="volumeBalokCheckbox" onchange="toggleInputFields('volumeBalok')"> Volume Balok
        <br>
        <input type="checkbox" id="volumeKubusCheckbox" onchange="toggleInputFields('volumeKubus')"> Volume Kubus
        <br>
        <input type="checkbox" id="volumeTabungCheckbox" onchange="toggleInputFields('volumeTabung')"> Volume Tabung
        <br>
        <input type="checkbox" id="luasBalokCheckbox" onchange="toggleInputFields('luasBalok')"> Luas balok
        <br>
        <input type="checkbox" id="luasKubusCheckbox" onchange="toggleInputFields('luasKubus')"> Luas kubus
        <br>
        <input type="checkbox" id="luasTabungCheckbox" onchange="toggleInputFields('luasTabung')"> Luas Tabung
        <br>
            <div id="BalokInputs" style="display: none;">
                Panjang: <input type="number"  id="panjangBalok"> <br>
                Lebar: <input type="number"  id="lebarBalok"> <br>
                Tinggi: <input type="number" id="tinggiBalok"> <br>
            </div>
            <div id="KubusInputs" style="display: none;">
                Sisi: <input type="number" id="sisiKubus"> <br>
            </div>
            <div id="TabungInputs" style="display: none;">
                Jari-Jari: <input type="number"  id="jariTabung"> <br>
                Tinggi: <input type="number"  id="tinggiTabung"> <br>
            </div>
        <button type="button" onclick="hitung()">Hitung</button>
        <br>
        <input type="number" name="hasil" id="hasil">
    </form>
</body>
</html>
