import { Request, Response } from "express";

// Se usan los endpoints de https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/guide/

export const getTodos = async (req: Request, res: Response) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    console.table(todos);
    return res.json(todos);

  } catch (error) {
    if (error instanceof Error) {
      return res.json({ message: error.message });
    }
  }
};
export const getTodo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
      const todos = await response.json();
      console.table(todos);
      return res.json(todos);
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ message: error.message });
      }
    }
};
export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title, body, userId } = req.body;

        const newTodo = {
            title,
            body,
            userId
        };
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/", {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const todoCreated = await response.json();
        console.table(todoCreated);
        return res.json(todoCreated);
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ message: error.message });
      }
    }
};
export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
        const { title, body, userId } = req.body;

        const updatedTodo = {
            title,
            body,
            userId,
            id
        };
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
            method: 'PUT',
            body: JSON.stringify(updatedTodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const todoUpdated = await response.json();
        console.table(todoUpdated);
        return res.json(todoUpdated);
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ message: error.message });
      }
    }
  };
export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
            method: 'DELETE',
        });
        const todoDeleted = await response.json();

        if (todoDeleted) {
            return res.json({ message: 'Eliminado correctamente...' });
        } else {
            return res.json({ message: 'hubo un error al eliminar...' });
        }
        
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ message: error.message });
      }
    }
  };
