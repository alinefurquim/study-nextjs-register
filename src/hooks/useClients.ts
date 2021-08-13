import { useEffect, useState } from "react"
import CollectionClient from "../backend/dataBase/CollectionClient"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableForm from "./useTableForm"

export default function useClients() {
  const repo: ClientRepository = new CollectionClient()

  const {tableVisible, formVisible, displayTable, displayForm} = useTableForm()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  
  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(client => {
      setClients(clients)
      displayTable()
    })
  }

  function selectClient(client: Client){
    setClient(client)
    displayForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    displayForm()   
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
  }

  return {
      client,
      clients,
      newClient,
      saveClient,
      deleteClient,
      selectClient,
      getAll,
      tableVisible,
      displayTable,
  }
}