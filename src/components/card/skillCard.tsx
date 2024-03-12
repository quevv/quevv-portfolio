import "@/styles/CardSkills.scss"
import { IProps } from "@/interfaces/iProps.interface"
import { ICardSkills } from "@/interfaces/iSkill.interface"

interface Props extends IProps {
    data: ICardSkills
}
export default function SkillCard({ children, className, data, ...props }: Props) {
    return (
        <>
            <div className="flex flex-col justify-around px-12 py-24 bg-neutral-900 select-none hover:ease-in group rounded-3xl w-384-px h-484-px shadow-md shadow-neutral-600" aria-hidden="true" >
                <img className="w-16 mb-8 duration-300 ease-in-out scale-100 group-hover:scale-105" src={data.imageSrc} loading="eager" alt="HTML5 - Developer X Webflow Template" aria-hidden="true" />
                <h3 className="mb-4 text-4xl font-bold text-gray-300 duration-300 ease-in-out group-hover:text-gray-100" aria-hidden="true">{data.name}</h3>
                <p className="text-xl text-gray-400 duration-300 ease-in-out h-23 mb-11 line-clamp-3 group-hover:text-gray-200" aria-hidden="true">{data.detail}</p>
                <div className="group-hover:bg-gray-100 w-16 h-1.5 bg-gray-300 duration-300 ease-in-out " aria-hidden="true"></div>
            </div>

        </>

    )
}