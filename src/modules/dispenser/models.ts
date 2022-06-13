import S from 'fluent-json-schema'

export const dispenserInputSchema = S.object()
    .prop('from', S.string().required().format('email'))
    .prop('password', S.string().required())
