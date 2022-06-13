import { firestore } from '@services/firebase'

import type { Dispenser, DispenserInput } from './types'

export const reserve = async (
    challenge: string,
    { password, from }: DispenserInput
) => {
    const dispenser = firestore.collection('dispenser').doc(challenge)

    const ref = await dispenser.get()
    const data = ref.data() as Dispenser | undefined

    if (!data) return new Error('Invalid challenge')
    if (!data.tickets?.length) return new Error('Tickets run out')

    const { reserved = [], tickets, password: correct } = data

    if (password !== correct) return new Error('Invalid passcode')

    const id = tickets.pop()
    if (!id) return new Error('Tickets run out')

    reserved.push({
        id,
        from
    })

    await dispenser.update({
        tickets,
        reserved
    })

    return id
}
