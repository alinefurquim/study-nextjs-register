export default function Title(props) {
    return (
        <div className="flex flex-col">
            <h1 className="pl-5 py-2 text text-2xl">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500"/>
        </div>
    )
}