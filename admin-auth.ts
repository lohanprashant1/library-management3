import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function verifyAdmin(request: NextRequest) {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token) return null;
  const admin = await db.adminUser.findFirst({ where: { token } });
  if (!admin) return null;
  if (admin.tokenExpiry && new Date(admin.tokenExpiry) < new Date()) return null;
  return admin;
}

export function unauthorizedResponse() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

export function serverErrorResponse(message = 'Internal server error') {
  return NextResponse.json({ error: message }, { status: 500 });
}
