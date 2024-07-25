import { ConnectDB } from "@/lib/Db";
import { prismaInstance } from "@/lib/PrismaInstance";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export const GET = async (request: NextRequest) => {
  try {
    // Connect to DB
    await ConnectDB();

    // Query to DB
    const products = (await prismaInstance.product.findMany()).reverse();

    // Return the Response
    return NextResponse.json(
      {
        products,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    const err = error as Error;
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: error?.issues[0]?.message,
        },
        {
          status: 500,
        }
      );
    }
    if (error instanceof PrismaClientKnownRequestError) {
      return NextResponse.json(
        {
          message: err?.message,
        },
        {
          status: 500,
        }
      );
    }
    return NextResponse.json(
      {
        message: err?.message,
      },
      {
        status: 500,
      }
    );
  }
};
