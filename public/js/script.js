function inputBerat() {
    const berat = parseFloat(document.getElementById('beratBadan').value);
    const tinggi = parseFloat(document.getElementById('tinggiBadan').value) / 100; 
    const output = document.getElementById('output');
    let totalBerat = berat / (tinggi * tinggi);

    if (totalBerat < 18.5) {
        output.textContent = `anda kurus dengan berat badan ${totalBerat.toFixed(2)}`;
    } else if (totalBerat >= 18.5 && totalBerat < 25) {
        output.textContent = `anda kurus dengan berat badan ${totalBerat.toFixed(2)}`;
    } else if (totalBerat >= 25) {
        output.textContent = `anda kurus dengan berat badan ${totalBerat.toFixed(2)}`;
    } else {
        alert("Null");
    }
}


