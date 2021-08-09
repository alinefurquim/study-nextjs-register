import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    changeClient?: (client: client) => void
    cancel?: () => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? '')
    return (
        <div>
            <div>
                {id ? (
                    <Input 
                        readonly
                        text="Código" 
                        value={id}
                        className="mb-5"
                        />
                ) : false }            
                <Input 
                    text="Nome" 
                    value={name} 
                    onChange={setName}
                    className="mb-5"
                />
                <Input  
                    text="Idade" 
                    type="number" 
                    value={age} 
                    onChange={setAge}
                />
                </div>
                <div className="flex justify-end mt-7">
                    <Button cor="blue" className="mr-2"
                        onClick={() => props.changeClient?.(new Client(name, +age, id))}>
                        {id ? 'Alterar' : 'Salvar'}
                    </Button>
                    <Button onClick={props.cancel}>
                        Cancelar
                    </Button>
                </div>
        </div>
    )
}    