type props = {
    name: string,
    avatar?: string,
    roles: string[]
}

export const Person = ({
    name, 
    avatar = "https://static.vecteezy.com/ti/vetor-gratis/p1/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg", 
    roles
}: props) => {
    return (
        <div className="flex flex-col gap-2 m-3">
            <h1 className="font-bold text-blue-500">Nome: {name}</h1>
            <img className="w-48" src={avatar} alt={name} />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    );
}