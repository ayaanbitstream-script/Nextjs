import { NextResponse } from "next/server";
import { siteData } from "../../lib/data";

// GET /api/data — returns all site data as JSON
// Used by external consumers or client-side fetches if needed.
export async function GET() {
  return NextResponse.json(siteData);
}
