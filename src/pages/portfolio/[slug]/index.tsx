
import { projectsList } from "@/data/projectList";
import { IProject } from "@/interfaces/iProject.interface";
import { IProps } from "@/interfaces/iProps.interface";
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
interface Props extends IProps {
    project: IProject
}
export default function Project({ project }: Props) {


    return (
        <>
            {/* SEO */}
            <NextSeo
                title="Vo Van Que"
                description="Vo Van Que Portfolio, introduce about projects, experiences, education,...."
                openGraph={{
                    url: '/',
                    title: 'Vo Van Que Portfolio',
                    description: 'Vo Van Que Portfolio, introduce about projects, experiences, education,....',
                    siteName: 'VoVanQue',
                }}
            />
            {/*  */}
            <section className="">
                <div className="p-4 py-12 sm:p-8 md:p-24 xl:px-48 sm:py-18 md:py-24">
                    <div className="w-2/12 h-2 my-2 bg-white"></div>
                    <h1 className="pt-8 text-6xl font-bold">{project.name}</h1>
                    <h2 className="pt-2 pb-8 text-4xl font-bold text-gray-300">{project.appType}</h2>
                    <h3 className="py-2 text-lg text-gray-400" dangerouslySetInnerHTML={{ __html: project.shortDescription }}></h3>
                </div>
            </section>
            <section className="flex justify-center">
                <Image width={1140} height={200} className="shadow-md shadow-gray-500 rounded-lg" alt="Project poster" src={project.thumnailUrl}></Image>
            </section>

            <section className="">
                <div className="grid grid-cols-1 gap-12 p-4 py-12 sm:p-8 md:p-24 xl:px-48 sm:py-18 md:py-24 md:grid-cols-1 lg:grid-cols-9">
                    <div className="col-span-full lg:col-span-3">
                        <div className="flex flex-col">
                            <div className="my-4">
                                <h1 className="text-2xl font-bold">Client</h1>
                                <div className="p-1 my-1 text-xl font-semibold text-gray-300">{project.projectType}</div>
                            </div>
                            <div className="my-4">
                                <h1 className="text-2xl font-bold">Teamsize</h1>
                                <div className="p-1 my-1 text-xl font-semibold text-gray-300">
                                    {
                                        Object.keys(project.teamSize).map((value: string) => {
                                            if (project.teamSize[value])
                                                return (
                                                    <h2 key={`${project.teamSize[value]}-${value}`}>{project.teamSize[value]} - {value}</h2>
                                                )
                                        })
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="my-4">
                            <h1 className="text-2xl font-bold">Position</h1>
                            <div className="p-1 my-1 text-xl font-semibold text-gray-300">{project.position}</div>
                        </div>
                        <div className="my-4">
                            <h1 className="text-2xl font-bold">Technologies</h1>
                            <div className="p-1 my-1 text-xl font-semibold text-gray-300">
                                {project.technologies.map(({ name }) => {
                                    return (
                                        <h2 key={name}>{name}</h2>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full lg:col-span-6">
                        <div>
                            <h1 className="mb-4 text-3xl font-bold">About the project</h1>
                            <div className="p-1 my-1 text-base text-gray-300" dangerouslySetInnerHTML={{ __html: project.fullDesciption }}></div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}



interface IStaticPropsProject {
    project?: IProject,
    [key: string]: any
}
interface IParams extends ParsedUrlQuery {
    slug: string,
}
export const getStaticProps = async (context: GetStaticPropsContext<IParams>): Promise<GetStaticPropsResult<IStaticPropsProject>> => {
    const { slug } = context.params as IParams
    const project = projectsList.find((value: IProject) => {
        return value.slug == slug
    })
    return {
        props: {
            project
        }
    }
};
export const getStaticPaths = async (): Promise<GetStaticPathsResult<IParams>> => {
    const paths = projectsList.map((item: IProject) => {
        return ({
            params: {
                slug: item.slug,
            }
        })
    })
    return {
        paths,
        fallback: false,
    };
};