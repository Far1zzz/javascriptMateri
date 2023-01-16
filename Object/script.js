// object literal
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
// function Mahasiswa(name, energi) {
//   let Mahasiswa = {};
//   Mahasiswa.name = name;
//   Mahasiswa.energi = energi;

//   Mahasiswa.makan = function (poorsi) {
//     this.energi += poorsi;
//     console.log(`go go ${this.name}`);
//   };
//   Mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`hola ${name}`);
//   };

//   return Mahasiswa;
// }

// let frz = Mahasiswa("farizz", 10);
// let zen = Mahasiswa("znn", 20);

// constructor function
function Mahasiswa(name, energi) {
  this.name = name;
  this.energi = energi;

  this.makan = function (poorsi) {
    this.energi += poorsi;
    console.log(`go go ${this.name}`);
  };
  this.main = function (jam) {
    this.energi -= jam;
    console.log(`hola ${name}`);
  };
}

let frz = new Mahasiswa("friz", 15);
