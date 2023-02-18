// https://beta.nextjs.org/docs/routing/route-handlers
// 這個目前還沒推出，還在 RC，先 backup only
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
    response.json(),
  );

  // NextResponse extends the Web Response API
  return NextResponse.json({ data });
}
