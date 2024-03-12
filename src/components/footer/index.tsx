import Link from "next/link";
import SocialsList from "../socialsList";
import OpenMoreButton from "../button/openMoreBtn";

export default function Footer() {
    return (
        <>
            <footer className="border-t lg:pt-2 border-t-white">
                <div className="grid grid-cols-1 gap-12 p-4 py-12 border-b sm:gap-24 md:gap-24 xl:gap-24 2xl:gap:40 sm:m-8 md:m-24 xl:mx-48 sm:my-4 md:my-6 md:grid-cols-2 border-b-slate-500">
                    <div className="flex justify-center">
                        <div>
                            <h2 className="my-1 text-3xl font-semibold">Vo Van Que</h2>
                            <h2 className="my-1 text-2xl font-semibold">Front-end Web Developer</h2>
                            <div className="flex flex-wrap gap-6 my-3">
                                <SocialsList />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 3xl:grid-cols-2">
                        <div className="flex flex-col items-center">
                            <div className="min-w-fit">
                                <div className="my-2">
                                    <h1 className="text-2xl font-bold">Email me:</h1>
                                    <OpenMoreButton href={"mailto:quevovan01062001@gmail.com"} className="text-xl font-bold ">
                                        quevovan01062001@gmail.com
                                    </OpenMoreButton>
                                </div>
                                <div className="my-2">
                                    <h1 className="text-2xl font-bold">Call me:</h1>
                                    <OpenMoreButton href={"tel:0962371064"} className="text-xl font-bold ">
                                        0962 371 064
                                    </OpenMoreButton>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="pb-6 text-center">
                    <p className="inline">© {new Date().getFullYear()} Copyright:</p>
                    <Link
                        className="font-semibold text-neutral-600 dark:text-neutral-400"
                        href="https://github.com/quevv"
                    > Vo Van Que</Link>
                </div>

            </footer >
        </>
    )
}