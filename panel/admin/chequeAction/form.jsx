import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='cheque'
        property='cheque'
        required
    />
    <Select
        options={[
            'register',
            'endorse',
            'deposit',
            'clear',
            'return',
            'cancel',
            'replace',
        ]}
        placeholder='actionType'
        property='chequeActionType'
        required
    />
    <DateTime
        placeholder='actionDate'
        property='actionDate'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
