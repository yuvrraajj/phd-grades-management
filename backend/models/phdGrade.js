const mongoose = require('mongoose');

const phdGradeSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tpPlsGrade: {
        type: String,
        enum: ['Above Average', 'Average', 'Below Average', 'NC'],
        required: true
    },
    seminarGrade: {
        type: String,
        enum: ['Good', 'Poor', 'NC'],
        required: true
    },
    thesisGrade: {
        type: String,
        enum: ['Satisfactory', 'Unsatisfactory', 'NC'],
        required: true
    },
    supervisorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    supervisorSignature: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    hodSignature: {
        type: String,
        default: 'unsigned'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const PhDGrade = mongoose.model('PhDGrade', phdGradeSchema);

module.exports = PhDGrade;