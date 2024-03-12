import { IProject, ITechnicalProject } from "@/interfaces/iProject.interface"
import { IProps } from "@/interfaces/iProps.interface"
import Link from "next/link"

interface Props extends IProps {
    data: IProject,
}
export default function ProjectCard({ children, className, data, ...props }: Props) {

    return (
        <>
            <Link href={{
                pathname: '/portfolio/[slug]',
                query: { slug: data.slug },
            }}>

                <div className={`w-full mx-auto overflow-hidden duration-300 cursor-pointer my-14 rounded-3xl group hover:scale-105 group-hover:ease-in-out shadow-lg shadow-gray-400 ${className}`}>
                    <div className="flex flex-wrap justify-end m-6 font-medium mt-9 group ">
                        {
                            data.technologies.map((technicalProject: ITechnicalProject) => {
                                return (
                                    <div className="relative px-4 py-2 m-2 duration-300 rounded-xl bg-neutral-600 hover:scale-105 hover:ease-in-out" key={technicalProject.name}>
                                        {technicalProject.name}
                                        {technicalProject.isMyPosition ? <div className="absolute w-2 h-2 bg-gray-200 rounded-full" style={{ top: "-1px", right: "-1px" }}></div> : <></>}

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="m-6">
                        <h1 className="my-5 text-4xl font-semibold">{data.name}</h1>
                        <h2 className="text-2xl font-normal">{data.appType}</h2>
                    </div>
                    <div className="w-full duration-500 mt-16 group-hover:scale-110">
                        <img className="" src={data.thumnailUrl}></img>
                    </div>

                </div >
            </Link>
        </>
    )
}