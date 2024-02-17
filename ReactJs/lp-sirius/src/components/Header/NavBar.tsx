
export const NavBar = () => {

    type PropsLink = {
        name: string,
        link: string
    }

    const LinkList: PropsLink[] = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/'},
        {name: 'Services', link: '/'},
        {name: 'Projects', link: '/'},
        {name: 'Packages', link: '/'}
    ]

    return(
        <nav className="hidden text-white lg:flex list-none gap-6 uppercase">
            {LinkList.map((link, index) => (
                <li key={index} className="transition-transform transform hover:translate-y-[-2px]">
                    <a href={link.link}>{link.name}</a>
                </li>
            ))}        
       </nav>
    );
}