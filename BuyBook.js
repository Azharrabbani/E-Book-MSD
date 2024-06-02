function masukannama() {
    if (document.f.Nama.value == "") {
        alert("anda belum memasukkan nama");
    }
}
function masukantelpon() {
    if (document.f.Telpon.value == "") {
        alert("anda belum memasukkan Telphone");
    }
}
function masukanaEmail() {
    if (document.f.email.value == "") {
        alert("anda belum memasukkan Email");
    }
}
function masukanalamat() {
    if (document.f.ialamat.value == "") {
        alert("anda belum memasukkan alamat");
    }
}

function inputanData() {
    var Nama = document.getElementById("Nama").value;
    var Telpon = document.getElementById("Telpon").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("ialamat").value;

    var nama = document.getElementById("nama");
    var telpon = document.getElementById("telpon");
    var Email = document.getElementById("Email");
    var alamat1 = document.getElementById("alamat");

    nama.value = Nama;
    telpon.value = Telpon;
    Email.value = email;
    alamat1.value = alamat;

    var hiden = document.getElementById("hidden");

    if (Nama && Telpon && email && alamat) {
        alert("Terima Kasih Telah Memsan Buku ini. Silahkan Melunasi pembayaran");
        // If data is complete, show the hidden form
        hiden.style.display = "flex";
    } else {
        alert("Mohon Data Dilengkapi");
        // If data is incomplete, hide the hidden form
        hiden.style.display = "none";
    }
}
