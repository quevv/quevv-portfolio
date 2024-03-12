
type TItemNavbar = {
    name: string,
    title: string,
    slug: string,
}

const menuNavbarList: TItemNavbar[] = [
    {
        name: "home",
        title: "Home",
        slug: "/"
    },
    {
        name: "about",
        title: "About Me",
        slug: "/about-me"
    },
    {
        name: "portfolio",
        title: "Portfolio",
        slug: "/portfolio"
    }
]

export { menuNavbarList }

