import prisma from '../../../../helpers/lib/prisma';

interface RequestBody {
    Nome: string;
    Email: string;
    Password: string;
}

export async function POST(request: Request) {

    const body: RequestBody = await request.json();

    const user = await prisma.usuario.create({
        data: {
            Email: body.Email,
            Password: body.Password,
            Nome: body.Nome
        }
    })

    const { Password, ...result } = user;

    return new Response(JSON.stringify(result));
}