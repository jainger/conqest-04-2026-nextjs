const SECRET_CODE = 'HACKATHON-7749';

export async function POST(request) {
  const { code } = await request.json();
  return Response.json({ correct: code?.trim().toUpperCase() === SECRET_CODE });
}
