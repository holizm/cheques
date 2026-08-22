import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='chequesNumber'
        property='number'
        required
    />
    <Select
        options={[
            'received',
            'issued',
        ]}
        placeholder='chequesDirection'
        property='chequeDirection'
        required
    />
    <Text
        placeholder='chequesDrawer'
        property='drawer'
        required
    />
    <Text
        placeholder='chequesPayee'
        property='payee'
        required
    />
    <Text
        placeholder='chequesBank'
        property='bank'
        required
    />
    <DateTime
        placeholder='chequesIssueDate'
        property='issueDate'
        required
    />
    <DateTime
        placeholder='chequesDueDate'
        property='dueDate'
        required
    />
    <Numeric
        placeholder='chequesAmount'
        property='amount'
        required
    />
    <Text
        placeholder='chequesCurrency'
        property='currency'
        required
    />
    <LongText
        placeholder='chequesDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
