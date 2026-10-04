import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        cheque
        required
    />
    <Select
        chequeActionType
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
        required
    />
    <DateTime
        actionDate
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
