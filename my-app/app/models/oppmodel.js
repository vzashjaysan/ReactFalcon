const mongoose = require('mongoose');

const oppSchema = mongoose.Schema({
    title: String,
    description: String
}
);

module.exports = mongoose.model('Opp', oppSchema);