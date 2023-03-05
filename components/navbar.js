import Link from 'next/link'

const Navbar = () => {
    const navLinks = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "About",
            link: "/about"
        },
        {
            id: 3,
            name: "Blog",
            link: "/blogs"
        },
        {
            id: 4,
            name: "Contact",
            link: "/contact"
        },
    ];


    return (
        <>
            <nav className="fixed flex justify-center items-center px-5 w-full h-20 ">
                <ul className="flex">
                    {navLinks.map(({ id, name, link, href }) => {
                        return (
                            <li key={id}
                                className={`mx-4 py-2 capitalize font-medium  cursor-pointer text-gray-500 hover:scale-[1.15] border-b-2 border-transparent hover:border-b-gray-300 duration-500 hover:text-gray-600`}>
                                {id === 5 ?
                                    <a href={href} target="_blank" rel='noferrer'>{name}</a>
                                    :
                                    <Link
                                        href={link}
                                    > {name}
                                    </Link>
                                }
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className="h-20">{""}</div>
        </>
    )
}

export default Navbar