import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../lib/prisma/prismaClient";
import { createUserSchema } from "../../../../../lib/zod/createUserSchema";

export async function POST(NextRequest: NextRequest) {
  try {
    const body = NextRequest.json();
    const user = createUserSchema.parse(body);
    const createUser = await prisma.user.create({ data: user });

    return NextResponse.json(
      { message: "User not was created!!" },
      { status: 400 }
    );
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
