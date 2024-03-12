import OpenMoreButton from "@/components/button/openMoreBtn";
import ProjectList from "@/components/projectList";
import SkillsList from "@/components/skillList";
import SocialsList from "@/components/socialsList";
import { projectsList } from "@/data/projectList";
import { NextSeo } from "next-seo";



export default function Home() {
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
            <section className="mx-auto tracking-wider">
                <div className="grid grid-cols-1 gap-12 p-4 py-12 sm:gap-40 sm:p-8 md:p-40 xl:px-48 sm:py-18 md:py-24 md:grid-cols-1 lg:grid-cols-2">
                    <div className="">
                        <h1 className="mb-8 text-6xl font-semibold">Hi,<br></br> I&apos;m Vo Van Que,<br></br>Front-end Web Developer.</h1>
                        <div className="flex flex-wrap gap-6 my-3">
                            <SocialsList />
                        </div>
                    </div>
                    <div className="divide-y divide-gray-500 ">
                        <div className="py-6">
                            <h1 className="py-3 text-2xl font-medium uppercase">About me</h1>
                            <p>Front-end web developer with experience designing, and developing web applications with a strong focus on user experience and responsive design. Seeking a challenging position in a dynamic and fast-paced environment.</p>
                            <OpenMoreButton href="/about-me" className="mt-5 uppercase"><h5>Learn More</h5></OpenMoreButton>
                        </div>

                        <div className="py-6 my-4">
                            <h2 className="py-3 text-2xl font-medium uppercase">My work</h2>
                            <p>Design and development of user-friendly web applications. Collaborate with cross-functional teams to identify requirements and develop technical solutions to meet business needs. Implement web security best practices, including encryption, authentication, and access control. Perform code reviews and optimize application performance through testing and debugging.
                            </p>
                            <OpenMoreButton href="/portfolio" className="mt-5 uppercase"><h5>Browse portfolio</h5></OpenMoreButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* About me Body Home Page */}
            <section>
                <div className="grid grid-cols-1 gap-12 p-4 py-12 sm:gap-40 sm:p-8 md:p-24 xl:px-48 sm:py-18 md:py-24 md:grid-cols-1 lg:grid-cols-2">
                    <div>
                        <div className="py-4 text-2xl font-semibold uppercase">
                            <span className="text-blue-700 h-14">/</span> About me
                        </div>
                        <h2 className="py-2 text-5xl font-semibold">I’ve been developing websites since 2022</h2>
                        <p className="py-5 text-lg text-gray-300">As a highly curious individual, I thrive in competitive environments and quickly adapt to new technologies for web application development.</p>
                        <OpenMoreButton href="/about-me" className="py-3 text-xl font-bold ">More about me</OpenMoreButton>
                    </div>
                    <div className="py-16 lg:pt-14">
                        <div className="py-2">
                            <div className="grid grid-cols-1 gap-6 xl:gap-40 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2">
                                <div className="flex">
                                    <div className="text-6xl font-bold">02</div>
                                    <div className="items-center m-auto ml-4 text-lg font-bold">Years of <br></br> experience</div>
                                </div>
                                <div className="flex">
                                    <div className="text-6xl font-bold">05</div>
                                    <div className="items-center m-auto ml-4 text-lg font-bold">Successful projects</div>
                                </div>
                            </div>
                        </div>
                        <p className="py-5 text-lg text-gray-300">My first web application projects were developed using Java Servlet during my Java course at FPT University. Following that, particularly noteworthy are the web applications I crafted using NextJS and ReactJS in 2022 and 2023.</p>
                    </div>
                </div>
            </section>

            {/* My Skills Body Home Page */}
            <section className="p-4 py-12 sm:p-8 md:p-24 xl:px-48 sm:py-18 md:py-24">
                <div className="">
                    <div className="py-4 text-2xl font-semibold uppercase">
                        <span className="text-blue-700 h-14">/</span> My skills
                    </div>
                    <h2 className="py-2 text-5xl font-semibold md:mt-5">My extensive list of skills</h2>
                    <SkillsList />
                </div>
            </section >
            {/* My Portfolio Body Home Page */}
            <section className="">
                <ProjectList projectsList={projectsList.slice(0, 4)} cardClassName="bg-neutral-900">
                    <div>
                        <div className="py-4 text-2xl font-semibold uppercase">
                            <span className="text-blue-700 h-14">/</span> My portfolio
                        </div>
                        <h2 className="py-2 text-5xl font-semibold">Take a look at the latest projects I’ve done</h2>
                        <OpenMoreButton href="/portfolio" className="py-3 text-xl font-bold">Browse all projects</OpenMoreButton>
                    </div>
                </ProjectList>
            </section>
        </>
    )
}