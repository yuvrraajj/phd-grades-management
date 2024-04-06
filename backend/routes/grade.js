// models/PhdGrade.js
const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId, // Corresponds to 'Id No'
    ref: 'User',
    required: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId, // Corresponds to 'author_id', faculty who enters the grade
    ref: 'User',
    required: true
  },
  tpPlsGrade: {
    type: String, // 'TP-1 / PLS-1 Grade'
    enum: ['Above Average', 'Average', 'Below Average', 'NC'],
    required: true
  },
  seminarIndependentStudyGrade: {
    type: String, // 'Seminar / Independent Study Grade'
    enum: ['Good', 'Poor', 'NC'],
    required: true
  },
  thesisGrade: {
    type: String, // 'Thesis Grade'
    enum: ['Satisfactory', 'Unsatisfactory', 'NC'],
    required: true
  },
  supervisorAuthorId: {
    type: mongoose.Schema.Types.ObjectId, // If different from authorId
    ref: 'User',
    required: false // Make required as per your logic
  },
  signature: {
    type: String, // URL or path to the signature image
    required: false // Depending on whether you require a signature upon entry
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Grade = mongoose.model('Grade', GradeSchema);
module.exports = PhdGrade;
