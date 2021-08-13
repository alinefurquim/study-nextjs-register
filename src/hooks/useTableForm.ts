import { useState } from "react";

export default function useTableForm() {
    const [visible, setVisible] = useState<'table' | 'form'> ('table')
    
    const displayTable = () => setVisible('table')
    const displayForm = () => setVisible('form')

    return {
        formVisible: visible === 'form',
        tableVisible: visible === 'table',
        displayTable,
        displayForm,
    }
}