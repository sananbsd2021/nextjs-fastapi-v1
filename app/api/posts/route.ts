import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import Post from '@/models/Post';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newPost = new Post(body);
    const savedPost = await newPost.save();
    return NextResponse.json({ success: true, data: savedPost }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
