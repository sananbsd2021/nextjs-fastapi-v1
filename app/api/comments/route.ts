import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import Comment from '@/models/Comment';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newComment = new Comment(body);
    const savedComment = await newComment.save();
    return NextResponse.json({ success: true, data: savedComment }, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');

    if (!postId) {
      return NextResponse.json({ success: false, error: 'Post ID is required' }, { status: 400 });
    }

    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: comments }, { status: 200 });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
