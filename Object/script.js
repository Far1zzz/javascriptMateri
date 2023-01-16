// object literal
//  Not recomended jika objectnya banyak
// let mahasiswa = {
//   // property
//   nama: "Fariz",
//   energy: 10,

//   //   method
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`go eat ${this.nama}`);
//   },
// };
// let mahasiswa2 = {
//   // property
//   nama: "pokemon",
//   energy: 10,

//   //   method
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`go eat ${this.nama}`);
//   },
// };

// function declaration
function Mahasiswa(name, energi) {
  // object create memanggil  method yg ada di methodMahsiswa
  let Mahasiswa = Object.create(methodMahasiswa);
  Mahasiswa.name = name;
  Mahasiswa.energi = energi;

  return Mahasiswa;
}
const methodMahasiswa = {
  makan: function (poorsi) {
    this.energi += poorsi;
    console.log(`go go ${this.name}`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`hola ${name}`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`bobo`);
  },
};

let frz = Mahasiswa("farizz", 10);
let zen = Mahasiswa("znn", 20);

// constructor function
// function Mahasiswa(name, energi) {
//   this.name = name;
//   this.energi = energi;

//   this.makan = function (poorsi) {
//     this.energi += poorsi;
//     console.log(`go go ${this.name}`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`hola ${name}`);
//   };
// }

// let frz = new Mahasiswa("friz", 15);

// object.create
