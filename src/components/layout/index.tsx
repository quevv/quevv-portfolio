import { IProps } from "@/interfaces/iProps.interface";
import Header from "../header";
import Footer from "../footer";

export default function Layout({ children, ...props }: IProps) {
    return (
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-800">
            <Header />
            <main className="min-h-screen py-20">{children}</main>
            <Footer />
        </div>
    )
}