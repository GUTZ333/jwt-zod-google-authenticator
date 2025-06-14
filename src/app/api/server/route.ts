import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "HTTP SERVER RUNNING!!" }, {status: 200})
}