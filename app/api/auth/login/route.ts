import prisma from '../../../../helpers/lib/prisma';

interface RequestBody {
    email: string;
    password: string;
}

export async function Post(request: Request) {
    const body : RequestBody = await request.json();

    const user = await prisma.usuario.findFirst({
        where: {
            Email: body.email,
            Password: body.password
        }
    })

    if(user) {

        const { Password, ...restProps } = user;

        return new Response(JSON.stringify(restProps))
    } else {
        return new Response(JSON.stringify(null))
    }
}