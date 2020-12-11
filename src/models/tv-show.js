'use strict';
const mongoose = require('mongoose');

const tvShowSchema = mongoose.Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {type: String, required: true}
});

const showsModel = mongoose.model('tv shows', tvShowSchema)


module.exports = showsModel;

// class TVShowModel {
//     constructor() {
//         this.title;
//         this.genre;
//         this.year;
//         this.id = 0;
//         this.db = [];
//     }

//     get(id) {
//         if(id) {
//            return this.db.find(record => record.id == id);
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
//         if(!id) { return null; }
//         let show = this.get(id);
//         show.title = obj.title || show.title;
//         show.year = obj.year || show.year;
//         show.genre = obj.genre ||  show.genre;
//         this.db[this.grabIndex(id)] = show;
//         return obj;

//     }

//     delete(id) {
//         if(!id){return null; }
//         this.db.splice(this.grabIndex(id),1);
//         return null;
//     }

//     grabIndex(id) {
//         return this.db.findIndex(record => record.id == id);
//     }
// }


// module.exports = TVShowModel;