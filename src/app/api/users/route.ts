import { NextRequest, NextResponse } from 'next/server';
import { getUsers } from '@/lib/users';

export const GET = async (request: NextRequest): Promise<NextResponse> => {
	const users = await getUsers();
	return NextResponse.json({ users });
};
