import mongoose, { Schema, model, models, Document } from 'mongoose';

interface IComment extends Document {
  postId: mongoose.Types.ObjectId; // เชื่อมโยงกับ Post
  content: string;
  createdAt: Date;
}

const CommentSchema = new Schema<IComment>({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = models.Comment || model<IComment>('Comment', CommentSchema);

export default Comment;