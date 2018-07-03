const mongoose = require('mongoose');

const OpportunitiesSchema = mongoose.Schema({
    JobCode: String,
    JobType: String,
    Summary: String,
    PrimarySkills: String,
    SecondarySkills: String,
    YearsOfExperience: String,
    NumberofOpenings: String,
    JobLocation: String
}
);

module.exports = mongoose.model('Opportunities',OpportunitiesSchema);