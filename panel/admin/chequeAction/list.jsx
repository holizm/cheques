import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>chequesCheque</th>
    <th>chequesActionType</th>
    <th>chequesActionDate</th>
    <th>chequesActor</th>
</>

const row = item => <>
    <td>{item.cheque?.number}</td>
    <td>{item.chequeActionType}</td>
    <DateTime value={item.actionDate} />
    <td>{item.actor?.title}</td>
</>

export default <List
    create={Form}
    hasEdit
    headers={headers}
    row={row}
/>
