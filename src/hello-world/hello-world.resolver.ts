import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class HelloWorldResolver {
    @Query(() => String, { description: 'mi primer hola mundo', name: 'helloWorld' })
    helloWorld(): string {
        return 'Hello, World!'
    }

    @Query(() => Float, { name: 'randomNumber' })
    getRandomNumber(): Number {
        return Math.random() * 100
    }

    @Query(() => Int, { name: 'randomNumber0_10' })
    getRandomFromZeroTo(@Args('to', { type: () => Int , nullable: true}) to: number = 6): number {
        return Math.floor(Math.random() * (to + 1))
    }
}
