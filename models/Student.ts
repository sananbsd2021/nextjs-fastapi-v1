import mongoose, { Schema, model, models, Document } from 'mongoose';

interface IStudent extends Document {
  fristname: string;
  lastname: string;
  g_level: string;
  grade: string;
  createdAt: Date;
}

const StudentSchema = new Schema<IStudent>({
  fristname: { type: String, required: true },
  lastname: { type: String, required: true },
  g_level: { type: String },
  grade: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Student = models.Student || model<IStudent>('Student', StudentSchema);

export default Student;
