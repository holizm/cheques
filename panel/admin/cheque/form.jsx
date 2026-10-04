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
        number
        required
    />
    <Select
        chequeDirection
        options={[
            'received',
            'issued',
        ]}
        placeholder='direction'
        required
    />
    <Text
        drawer
        required
    />
    <Text
        payee
        required
    />
    <Text
        bank
        required
    />
    <DateTime
        issueDate
        required
    />
    <DateTime
        dueDate
        required
    />
    <Numeric
        amount
        required
    />
    <Text
        currency
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
