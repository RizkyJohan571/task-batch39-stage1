// var gelas = "kopi"


// gelas = "Air putih"


// console.log(gelas);

// // tidak bisa di declare ulang
// let mangkok = "Bakso"
// mangkok = "mie ayam"
// let nama = "Rahmat"
// let umur = 25

// console.log("nama saya", nama, "umur saya", umur);

// let nilai = 40
// if(nilai > 70){
// 	console.log("A");
// }else if(nilai >= 60){
// 	console.log("B");
// }else{
// 	console.log("C");
// }

// function bilangan(){

// 	let bilanganSatu = 20
// 	let bilanganDua = 30
// 	console.log(bilanganSatu+bilanganDua);
// }
// bilangan();


	

function submitData(){

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    // if(name == "" || email == "" || phone == ""){
    //    return alert("semua kolom wajib diisi")
    // } 

    if(email == ""){
       return alert("name wajib diisi")
    } else if(email == ""){
       return alert("email wajib diisi")
    } else if(phone == ""){
       return alert("phone wajib diisi")
    } else if(subject == ""){
       return alert("subject wajib diisi")
    } else if(message == ""){
       return alert("message wajib diisi")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let emailReceiver = "rizal@mail.com"
    
    // membuat tag a
    // <a href="mailto:samsul@mail.com.com?subject=hallo&body=Isi pesan">example</a>
    let a = document.createElement('a')
    a.href=`mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak saya dengan email ${email}, telp ${phone}`
    a.click()

    let siswa = {
        name,
        email,
        phone,
        subject,
        message
    }
    console.log(siswa);   
}