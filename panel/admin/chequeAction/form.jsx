import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='chequesCheque'
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
        placeholder='coreActionType'
        property='chequeActionType'
        required
    />
    <DateTime
        placeholder='coreActionDate'
        property='actionDate'
        required
    />
    <LongText
        placeholder='chequesDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
