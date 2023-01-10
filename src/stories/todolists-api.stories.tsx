
import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '5a31e9df-eb10-4666-b607-4bf4979b0473'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

        const promise = todolistAPI.getTodolist()
        promise.then((res)=>{
            setState(res.data)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'Test-TODO'
        const promise = todolistAPI.createTodolist(title)
            .then((res)=>{
                setState(res.data)})
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todoID = '35889dd9-a28f-42bd-af60-bc008f1fd481'
        const promise = todolistAPI.deleteTodolist(todoID)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'React'
        const todoID = '29cd7dee-78f7-4f36-ae21-359eab020d39'
        const promise = todolistAPI.updateTodolist(todoID,title)
            promise
            .then((res)=>{
                setState(res.data)})
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

