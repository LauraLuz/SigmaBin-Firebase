import Titulo from "./Titulo";

interface LayoutProps {
    className?: string
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
              flex flex-col mt-5 mb-4 ml-5 mr-5
            bg-white text-gray-800 rounded-3xl
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}
