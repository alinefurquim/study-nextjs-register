import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {

const {
  client, 
  clients, 
  newClient, 
  selectClient, 
  deleteClient, 
  saveClient,
  tableVisible,
  displayTable}
   = useClients()

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
    <Layout title="Cadastro simple">
      {tableVisible ? (
        <>
        <div className="flex justify-end">
          <Button cor="green" className="mb-4"
            onClick={newClient}>
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
          client={client}
          cancel={() => displayTable}
          changeClient={saveClient}>
        </Form>
      )}
      </Layout>       
    </div>
  )
}