import { IProject } from "@/interfaces/iProject.interface";

const projectsList: IProject[] = [
    {
        name: "EzMom",
        slug: "ezmom",
        appType: "A milk store application.",
        thumnailUrl: "/images/projects/ezMom-poster.png",
        technologies: [
            {
                name: "ReactJS",
                isMyPosition: true
            },
            {
                name: "C#",
                isMyPosition: false
            },
        ],
        projectType: "Project for entrepreneurship course of FPT University",
        teamSize: {
            Backend: 2,
            Frontend: 1,
            Mobile: 0,
            Fullstack: 0
        },
        position: "Frontend",
        shortDescription: `
        <p>EzMom web application is designed to provides powered milk, and a recommender for the growth path of each child.</p>
        `,
        fullDesciption: `
        <p>Baby Milk store is an e-commerce store that provides powered milk for babies from 0-5 years old.
        </br> One of the key features of our application is the recommender for the growth path of each child, which helps trigger the growth path of special babies registry and recommend suitable products for them.</p>
        `,


    },
    {
        name: "QueVo Portfolio",
        slug: "portfolio",
        appType: "An individual portfolio application.",
        thumnailUrl: "/images/projects/porfolio-poster-2.png",
        technologies: [
            {
                name: "NextJs",
                isMyPosition: true
            },
            {
                name: "TailwindCSS",
                isMyPosition: true
            },

        ],
        projectType: "Individuals Project",
        position: "Frontend",
        teamSize: {
            Backend: 0,
            Frontend: 1,
            Mobile: 0,
            Fullstack: 0
        },
        shortDescription: `
        <p>Individuals project to introduce my self and projects that I was worked on before.</p>
        `,
        fullDesciption: `
        <p>&nbsp;Application has pages to show information about me, and my portfolio</p>
        
        `,
    },
    {
        name: "Ume Platform",
        slug: "ume",
        appType: "A booking partner platform.",
        thumnailUrl: "/images/projects/ume-poster.png",
        technologies: [
            {
                name: "NextJS",
                isMyPosition: true
            },
            {
                name: "Express JS",
                isMyPosition: false
            }
        ],
        projectType: "FPT University capstone project",
        position: "Frontend",
        teamSize: {
            Backend: 1,
            Frontend: 4,
            Mobile: 0,
            Fullstack: 0,
        },
        shortDescription: `
        <p>The Ume Platform provides features for people who want to sell their free time on the network with others, and for those who want to find and book others to communicate, learn, or play games with them.</p>
        `,
        fullDesciption: `
        <p>The application offers a range of functions that will help you find friends suitable to your needs and book them to communicate, learn, or play games.</p>
        <p><br></p>
        <p>Otherwise, the application has features to help you register to become a <strong>Provider</strong> - then you can sell your free time on the network.</p>
        <p><br></p>
        <p>The application also has a community page and chat room to help <strong>Customer</strong> and <strong>Provider</strong> talk and communicate with each other.</p>
        <p><br></p>
        
        `,
    },
    {

        name: "VieShare Platform",
        slug: "vieshare",
        appType: "A knowledge sharing platform.",
        thumnailUrl: "/images/projects/vieShare-poster.png",
        projectType: "FPT University SWP course",
        technologies: [
            {
                name: "NextJS",
                isMyPosition: true
            },
            {
                name: "Nest JS",
                isMyPosition: false
            }
        ],
        position: "Frontend",
        teamSize: {
            Backend: 2,
            Frontend: 2,
            Mobile: 0,
            Fullstack: 1,
        },
        shortDescription: `
        <p>VieShare platform is a social platform for sharing and accessing knowledge for Vietnamese.</p>
        `,
        fullDesciption: `
        <p>The application provides functions to help you filter, read, vote, and comment on posts.</p>
        <p><br></p>
        <p>Alternatively, you can sign up to become a <strong>Writer</strong>, from there you can create and manage your posts, then receive income from the posts you publish.</p>
        <p><br></p>
        `,
    },

]

export { projectsList }