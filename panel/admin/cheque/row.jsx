import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.chequeDirection}</td>
    <td>{item.drawer?.title}</td>
    <DateTime value={item.dueDate} />
    <td>{item.amount}</td>
    <td>{item.state?.title}</td>
</>
