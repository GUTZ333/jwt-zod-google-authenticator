import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma/prismaClient";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    if (users) {
      return NextResponse.json({ users }, { status: 200 });
    }
    return NextResponse.json(
      { message: "no user authenticated." },
      { status: 400 }
    );
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
