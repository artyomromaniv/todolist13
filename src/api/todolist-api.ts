import axios from 'axios'
import {DeleteTodolist} from "../stories/todolists-api.stories";

// const settings = {
//     withCredentials: true,
//     headers: {
//         // Не забываем заменить API-KEY на собственный
//         'API-KEY': '5a31e9df-eb10-4666-b607-4bf4979b0473',
//     },
// }

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '5a31e9df-eb10-4666-b607-4bf4979b0473',
    },
})


// type updateTodolistType = {
//     data: {}
//     fieldErrors: string[]
//     messages: string[]
//     resultCode: number
// }
// type DeleteTodolistType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {}
// }
// type CreateTodolistType = {
//     resultCode: number
//     messages: Array<string>
//     fieldsErrors: Array<string>
//     data: {
//         item: TodolistType
//     }
// }
type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<T ={}> =  {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType>(`todo-lists/${todolistId}`, {title: title})
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todolistId}`)
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{data:TodolistType[] }>>('todo-lists', {title})
        return promise
    },
    getTodolist() {
        const promise = instance.get<TodolistType[]>('todo-lists')
        return promise
    }
}
