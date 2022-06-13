import type { RouteShorthandMethod } from 'fastify'

export interface DispenserInput {
    password: string
    from: string
}

export interface DispenserHandler extends RouteShorthandMethod {
    Params: {
        id: string
    }
    Body: DispenserInput
}

export interface Reserve {
    id: string
    from: string
}

export interface Dispenser {
    password: string
    tickets: string[]
    reserved: Reserve[]
}
