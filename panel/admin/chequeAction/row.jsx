import { DateTime } from 'list'

export default item => <>
    <td>{item.cheque?.number}</td>
    <td>{item.chequeActionType}</td>
    <DateTime value={item.actionDate} />
    <td>{item.actor?.title}</td>
</>
