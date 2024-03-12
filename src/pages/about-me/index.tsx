import { NextSeo } from "next-seo";
import Link from "next/link";

export default function AboutMe() {
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
            <div className="px-4 py-12 sm:py-18 md:py-24 sm:px-8 md:px-24 xl:px-48">
                <section>
                    <h1 className="mb-8 text-6xl font-semibold"> I&apos;m Vo Van Que,<br />Frontend Web Developer.</h1>

                </section>
                <section className="py-2 sm:py-4 md:py-8 xl:py-12">
                    <h1 className="mb-5 text-4xl font-semibold">Skills</h1>
                    <div>
                        <div className="py-4 text-2xl font-semibold">
                            <span className="text-blue-700">*</span>
                            <span className="mx-1 ">Frontend: </span>
                        </div>
                        <div className="ml-2">
                            <ul className="pl-8 list-disc">
                                <li>HTML/CSS (SCSS), Bootstrap 5</li>
                                <li>JavaScript, ReactJS, NextJS</li>
                            </ul>
                        </div>

                        <div className="py-4 text-2xl font-semibold">
                            <span className="text-blue-700">*</span>
                            <span className="mx-1 ">Backend: </span>
                        </div>
                        <div className="ml-2">
                            <ul className="pl-8 list-disc">
                                <li>JavaScript, SQL</li>
                            </ul>
                        </div>

                        <div className="py-4 text-2xl font-semibold">
                            <span className="text-blue-700">*</span>
                            <span className="mx-1 ">Other technical skills: </span>
                        </div>
                        <div className="ml-2">
                            <ul className="pl-8 list-disc">
                                <li>Git, Jira  </li>
                                <li>Figma, Photoshop</li>
                            </ul>
                        </div>
                    </div>
                </section >
                <section className="py-2 sm:py-4 md:py-8 xl:py-12">
                    <h1 className="mb-5 text-4xl font-semibold">Education</h1>
                    <div>
                        <div className="py-4 text-2xl font-semibold">
                            <span className="text-blue-700">/</span>
                            <span className="mx-1 ">Oct 2019 - Apr 2024</span>
                        </div>
                        <div className="ml-2">
                            <div className="mb-2 text-xl">
                                <span className="text-xl">Software Engineer -</span>
                                <Link className="inline-block mx-2 text-blue-700 hover:text-blue-600" href={"https://fpt.edu.vn"} target="_blank">FPT University</Link>
                            </div>



                            <ul className="pl-8 list-disc">
                                <li>Studied software, including coursework in algorithms, data structures, programming languages, and computer architecture.</li>

                                <li>Completed a many project on the design and development of a web application using the Java, .Net, ReactJS, NextJS,... framework and MySQL database.</li>
                            </ul>

                        </div>
                    </div>
                </section >
            </div>

        </>
    )
}
