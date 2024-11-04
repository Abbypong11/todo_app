
// import axios from 'axios';

import { ITodo } from "./types/Todo";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllTodos = async (): Promise <ITodo[]> => {
    const  res = await fetch(`${baseUrl}/todos`);
    const todos = await res.json();
    return todos;
}
   

