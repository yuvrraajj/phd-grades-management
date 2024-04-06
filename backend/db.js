const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    user_email_id: { type: String, unique: true },
    name: String,
    roles: String
});

const User = mongoose.model('User', userSchema);

// PhDGrade Schema
const phdGradeSchema = new mongoose.Schema({
    author_id: String,
    student_id: String,
    tp_pls_grade: String,
    seminar_grade: String,
    thesis_grade: String,
    supervisor_author_id: String,
    hod_signature: { type: String, default: 'unsigned' }
});

const PhDGrade = mongoose.model('PhDGrade', phdGradeSchema);

module.exports = { User, PhDGrade };
