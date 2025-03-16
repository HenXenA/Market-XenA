function sendToTelegram() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    if (!nama || !email || !pesan) {
        alert("Harap isi semua kolom!");
        return;
    }

    var botToken = "7274352622:AAHdRP717cRIWABB-_e7c4Nmb3caThjksm0"; // Ganti dengan token bot Telegram
    var chatId = "6812251804"; // Ganti dengan Chat ID penerima

    var text = `📩 *Pesan Baru dari Form Kontak* 📩\n\n👤 *Nama:* ${nama}\n📧 *Email:* ${email}\n📝 *Pesan:* ${pesan}`;
    var url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}&parse_mode=Markdown`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Pesan berhasil dikirim ke Telegram!");
                document.getElementById("contactForm").reset();
            } else {
                alert("Gagal mengirim pesan, coba lagi! Error: " + data.description);
            }
        })
        .catch(error => alert("Error: " + error));
}