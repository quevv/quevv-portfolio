
import OpenMoreButton from "@/components/button/openMoreBtn";
import ProjectList from "@/components/projectList";
import { projectsList } from "@/data/projectList";
import { NextSeo } from "next-seo";


export default function Projects() {
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
            {/* */}
            <section className="">
                <ProjectList projectsList={projectsList.slice(0, 4)} cardClassName="bg-neutral-900">
                    <div>
                        <div className="py-4 text-2xl font-semibold uppercase">
                            <span className="text-blue-700 h-14">/</span> My portfolio
                        </div>
                        <h2 className="py-2 text-5xl font-semibold">Take a look at the latest projects I’ve done</h2>
                    </div>
                </ProjectList>
            </section>
        </>
    )
}
