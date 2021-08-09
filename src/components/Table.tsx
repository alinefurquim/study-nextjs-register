import Client from "../core/Client";

interface TableProps {
    clients: Client[]
}

export default function Table(props: TableProps) {

    function headerRender() {
        return (
            <tr>
               <th className="text-left p-4">Código</th> 
               <th className="text-left p-4">Nome</th> 
               <th className="text-left p-4">Idade</th> 
               <th className="p-4">Ações</th> 
            </tr>    
        )
    }

    function dataRender() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100' }`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {actionRender(client)}
                </tr>
            )
        })        
    }

    function actionRender(client: Client) {
        return (
            <td>

            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to bg-purple-800
            `}>
                {headerRender()}
            </thead>
            <tbody>
                {dataRender()}
            </tbody>
        </table>        
    )
}