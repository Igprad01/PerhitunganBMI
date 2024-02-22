function inputBerat() {
    const berat = parseFloat(document.getElementById('beratBadan').value);
    const tinggi = parseFloat(document.getElementById('tinggiBadan').value) / 100; 
    const laki = document.getElementById('lakiLaki');
    const perempuan = document.getElementById('perempuan');
    let totalBerat = berat / (tinggi * tinggi);

    if (totalBerat < 18.5) {
        alert(`Anda kurus dengan berat badan ${totalBerat.toFixed(2)}`);
    } else if (totalBerat >= 18.5 && totalBerat < 25) {
        alert(`Anda ideal dengan berat badan ${totalBerat.toFixed(2)}`);
    } else if (totalBerat >= 25) {
        alert(`Anda obesitas dengan berat badan ${totalBerat.toFixed(2)}`);
    } else {
        alert("Null");
    }
}


