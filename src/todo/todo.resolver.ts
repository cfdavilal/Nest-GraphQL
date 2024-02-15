import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Todo } from './entity/todo.entity'
import { TodoService } from './todo.service'
import { CreateTodoInput } from './dtos/inputs/create-todo.dto'

@Resolver()
export class TodoResolver {

    constructor(private readonly todoService: TodoService) {

    }

    @Query(() => [Todo], { name: 'todos' })
    findAll(): Todo[] {
        return this.todoService.findAll()
    }

    @Query(() => Todo, { name: 'todo' })
    findOne(@Args('id', { type: () => Number }) id: number): Todo {
        return this.todoService.findOne(id)
    }

    @Mutation(() => Todo, { name: 'createTodo' })
    createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput): Todo {
        return this.todoService.createTodo(createTodoInput)
    }

    updateTodo() {

    }

    removeTodo() {

    }
}
