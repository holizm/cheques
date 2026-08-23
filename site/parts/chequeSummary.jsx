export default ({ cheque }) => <dl class='summary'>
    <dt class='number'>{cheque.number}</dt>
    <dd class='dueDate'>{cheque.dueDate}</dd>
    <dd class='amount'>{cheque.amount}</dd>
    <dd class='state'>{cheque.state?.title}</dd>
</dl>
