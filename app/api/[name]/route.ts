import { NextRequest, NextResponse } from "next/server";
interface Params {
    name: string;
  }
export async function GET(request: NextRequest, {params}: {params: Params}) {
    return NextResponse.json({
      From: params.name,
      Message: "Greetings from Pakistan",
      RequestType: "GET"
    });
}