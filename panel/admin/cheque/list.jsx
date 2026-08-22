import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>chequesNumber</th>
    <th>chequesDirection</th>
    <th>chequesDrawer</th>
    <th>chequesDueDate</th>
    <th>chequesAmount</th>
    <th>chequesState</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.chequeDirection}</td>
    <td>{item.drawer?.title}</td>
    <DateTime value={item.dueDate} />
    <td>{item.amount}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
