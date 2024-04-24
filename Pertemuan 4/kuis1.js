function toggleInputFields(shape) {
    var BalokInputs = document.getElementById('BalokInputs');
    var KubusInputs = document.getElementById('KubusInputs');
    var TabungInputs = document.getElementById('TabungInputs');
    var volumeBalokCheckbox = document.getElementById('volumeBalokCheckbox');
    var volumeKubusCheckbox = document.getElementById('volumeKubusCheckbox');
    var volumeTabungCheckbox = document.getElementById('volumeTabungCheckbox');
    var luasBalokCheckbox = document.getElementById('luasBalokCheckbox');
    var luasKubusCheckbox = document.getElementById('luasKubusCheckbox');
    var luasTabungCheckbox = document.getElementById('luasTabungCheckbox');

    if (shape === 'volumeBalok') {
        BalokInputs.style.display = 'block';
        KubusInputs.style.display = 'none';
        TabungInputs.style.display = 'none';
        volumeKubusCheckbox.checked = false;
        volumeTabungCheckbox.checked = false;
        luasBalokCheckbox.checked = false;
        luasKubusCheckbox.checked = false;
        luasTabungCheckbox.checked = false;
    } else if (shape === 'volumeKubus') {
        BalokInputs.style.display = 'none';
        KubusInputs.style.display = 'block';
        TabungInputs.style.display = 'none';
        volumeBalokCheckbox.checked = false;
        volumeTabungCheckbox.checked = false;
        luasBalokCheckbox.checked = false;
        luasKubusCheckbox.checked = false;
        luasTabungCheckbox.checked = false;
    } else if (shape === 'volumeTabung') {
        BalokInputs.style.display = 'none';
        KubusInputs.style.display = 'none';
        TabungInputs.style.display = 'block';
        volumeBalokCheckbox.checked = false;
        volumeKubusCheckbox.checked = false;
        luasBalokCheckbox.checked = false;
        luasKubusCheckbox.checked = false;
        luasTabungCheckbox.checked = false;
    } else if (shape === 'luasBalok') {
        BalokInputs.style.display = 'block';
        KubusInputs.style.display = 'none';
        TabungInputs.style.display = 'none';
        volumeBalokCheckbox.checked = false;
        volumeKubusCheckbox.checked = false;
        volumeTabungCheckbox.checked = false;
        luasKubusCheckbox.checked = false;
        luasTabungCheckbox.checked = false;
    } else if (shape === 'luasKubus') {
        BalokInputs.style.display = 'none';
        KubusInputs.style.display = 'block';
        TabungInputs.style.display = 'none';
        volumeBalokCheckbox.checked = false;
        volumeKubusCheckbox.checked = false;
        volumeTabungCheckbox.checked = false;
        luasBalokCheckbox.checked = false;
        luasTabungCheckbox.checked = false;
    } else if (shape === 'luasTabung') {
        BalokInputs.style.display = 'none';
        KubusInputs.style.display = 'none';
        TabungInputs.style.display = 'block';
        volumeBalokCheckbox.checked = false;
        volumeKubusCheckbox.checked = false;
        volumeTabungCheckbox.checked = false;
        luasBalokCheckbox.checked = false;
        luasKubusCheckbox.checked = false;
     }
}

function hitung() {
    var hasilField = document.getElementById('hasil');
    var volumeBalokCheckbox = document.getElementById('volumeBalokCheckbox');
    var volumeKubusCheckbox = document.getElementById('volumeKubusCheckbox');
    var volumeTabungCheckbox = document.getElementById('volumeTabungCheckbox');
    var luasBalokCheckbox = document.getElementById('luasBalokCheckbox');
    var luasKubusCheckbox = document.getElementById('luasKubusCheckbox');
    var luasTabungCheckbox = document.getElementById('luasTabungCheckbox');

    if (volumeBalokCheckbox.checked) {
        var panjang = parseFloat(document.getElementById('panjangBalok').value);
        var lebar = parseFloat(document.getElementById('lebarBalok').value);
        var tinggi = parseFloat(document.getElementById('tinggiBalok').value);
        var volume = panjang * lebar * tinggi;
        hasilField.value = volume;
    } else if (volumeKubusCheckbox.checked) {
        var sisi = parseFloat(document.getElementById('sisiKubus').value);
        var volume = sisi * sisi * sisi;
        hasilField.value = volume;
    } else if (volumeTabungCheckbox.checked) {
        var r = parseFloat(document.getElementById('jariTabung').value);
        var t = parseFloat(document.getElementById('tinggiTabung').value);
        var v = (22 / 7) * r * r * t;
        hasilField.value = v;  
    } else if (luasBalokCheckbox.checked) {
        var a = parseFloat(document.getElementById('panjangBalok').value);
        var b = parseFloat(document.getElementById('lebarBalok').value);
        var c = parseFloat(document.getElementById('tinggiBalok').value);
        var v = 2 * ((a * b) + (a * c) + (c * b));
        hasilField.value = v;  
    } else if (luasKubusCheckbox.checked) {
        var s = parseFloat(document.getElementById('sisiKubus').value);
        var v = 6 * s * s;
        hasilField.value = v; 
    } else if (luasTabungCheckbox.checked) {
        var r = parseFloat(document.getElementById('jariTabung').value);
        var t = parseFloat(document.getElementById('tinggiTabung').value);
        var v = 2 * (22 / 7) * r * (r + t);
        hasilField.value = v;
    } else {
        hasilField.value = "Pilih salah satu bentuk terlebih dahulu.";
    }
}

