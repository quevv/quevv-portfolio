export interface ITechnicalProject {
    name: string,
    isMyPosition: boolean
}
export interface IProject {
    technologies: ITechnicalProject[],
    name: string,
    slug: string,
    projectType: string,
    appType: string,
    shortDescription: string,
    fullDesciption: string,
    thumnailUrl: string,
    position: string,
    teamSize: {
        Backend: number,
        Frontend: number,
        Mobile: number,
        Fullstack: number,
        [key: string]: number
    }
}
