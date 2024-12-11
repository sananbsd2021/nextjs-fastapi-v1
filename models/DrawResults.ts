import mongoose, { Schema, model, models, Document } from 'mongoose';

interface INewsH extends Document {
  drawDate: Date;
  typeDigit: string;
  threeDigitOn: string;
  twoDigitOn: string;
  twoDigitLow: string;
  createdAt: Date;
}

const NewsHSchema = new Schema<INewsH>({
  drawDate: { type: Date },
  typeDigit: { type: String, required: true },
  threeDigitOn: { type: String, required: true },
  twoDigitOn: { type: String, required: true },
  twoDigitLow: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const drawresults = models.drawresults || model<INewsH>('drawresults', NewsHSchema);

export default drawresults;

