import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.redirect(
    "https://raw.githubusercontent.com/jakerains/vellum/main/install.sh",
    308,
  );
}
