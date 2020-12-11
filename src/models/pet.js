'use strict';

const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    name: {type: String, required: true},
    species: {type: String, required: true, enum: ['CAT','DOG','RODENT','REPTILE','BIRD','HORSE']},
    age: {type: Number, required: true}
})

const petsModel = mongoose.model('pets', petSchema);

module.exports = petsModel;

// class PetModel {
//     constructor() {
//         this.name;
//         this.type;
//         this.age;
//         this.id = 0;
//         this.db = [];
//     }

//     get(id) {
//         if(id) {
//            return  this.db.find(record => record.id == id);
//         } else {
//             return this.db;
//         }
//     }

//     create(obj) {  
//         obj.id = ++this.id;
//         this.db.push(obj);
//         return obj;
//     }

//     update(id, obj) {
//         // console.log(obj)
//         if(!id) { return null; }
//         let pet = this.get(id);
//         pet.name = obj.name || pet.name;
//         pet.type = obj.type || pet.type;
//         pet.age = obj.age ||  pet.age;
//         this.db[this.grabIndex(id)] = pet;
//         // console.log(obj)
//         // console.log(pet)
//         return pet;

//     }

//     delete(id) {
//         // console.log('DEL id ', id);
//         if(!id){return null; }
//         console.log('before ', this.db)
//         this.db.splice(this.grabIndex(id),1);
//         console.log('after ', this.db)
//         return null;
//     }

//     grabIndex(id) {
//         return this.db.findIndex(record => record.id === id);
//     }
// }


// module.exports = PetModel;