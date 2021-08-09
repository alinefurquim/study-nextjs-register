import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlo', 23, '3'),
    new Client('Pedro', 54, '4'),
  ]

  function selectClient(client: Client){
    console.log(client.name)
  }

  function deleteClient(client: Client) {
    console.log(client.name)
  }

  function saveClient(client: Client) {
    console.log(client)
  }

  const [visible, setVisible] = useState<'table' | 'form'> ('table')

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
    <Layout title="Cadastro simple">
      {visible === 'table' ? (
        <>
        <div className="flex justify-end">

          <Button cor="green" className="mb-4"
          onClick={() => setVisible('form')}>
            Novo Cliente
          </Button>
        </div>      
        <Table clients={clients} 
          selectClient={selectClient}
          deleteClient={deleteClient}>
        </Table>
      </>
      ) : (
        <Form 
          client={clients[0]}
          cancel={() => setVisible('table')}
          changeClient={saveClient}>
        </Form>
      )}
      </Layout>       
    </div>
  )
}