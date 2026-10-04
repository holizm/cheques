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
        placeholder='number'
        property='number'
        required
    />
    <Select
        options={[
            'received',
            'issued',
        ]}
        placeholder='direction'
        property='chequeDirection'
        required
    />
    <Text
        placeholder='drawer'
        property='drawer'
        required
    />
    <Text
        placeholder='payee'
        property='payee'
        required
    />
    <Text
        placeholder='bank'
        property='bank'
        required
    />
    <DateTime
        placeholder='issueDate'
        property='issueDate'
        required
    />
    <DateTime
        placeholder='dueDate'
        property='dueDate'
        required
    />
    <Numeric
        placeholder='amount'
        property='amount'
        required
    />
    <Text
        placeholder='currency'
        property='currency'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
