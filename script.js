//CALLBACK
// syncronus callback
// function halo(nama) {
//   alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt(`Masukkan Nama: `);
//   callback(nama);
// }

// // tampilkanPesan(halo);
// tampilkanPesan((nama) => alert(`Halo ${nama}`));

// const mhs = [
//   {
//     nama: `Galih Arizza`,
//     nrp: `23123213`,
//     email: `email@email.com`,
//     jurusan: `Teknik Informatika`,
//     idDOsenWali: 1,
//   },
//   {
//     nama: `Candra Aditya`,
//     nrp: `456465465`,
//     email: `email+1@email.com`,
//     jurusan: `Teknik Informatika`,
//     idDOsenWali: 2,
//   },
//   {
//     nama: `Dimas Fatoni`,
//     nrp: `949878948`,
//     email: `email+2@email.com`,
//     jurusan: `Teknik Informatika`,
//     idDOsenWali: 3,
//   },
//   {
//     nama: `Perdana`,
//     nrp: `8987565`,
//     email: `email+3@email.com`,
//     jurusan: `Teknik Informatika`,
//     idDOsenWali: 2,
//   },
// ];

// return masing - masing nama dari mahasiswa dengan simulasi data yang loopingnya lama
// console.log(`mulai`);
// // pakai map
// mhs.map((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log(`selesai`);

// asyncronus callback
// vanilla
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }
// console.log(`mulai`);
// getDataMahasiswa(
//   "mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   (error) => {}
// );
// console.log(`selesai`);

// jquerry
console.log(`mulai`);
$.ajax({
  url: `mahasiswa.json`,
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log(`selesai`);
