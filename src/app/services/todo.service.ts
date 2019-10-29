// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	private allTodos: string[];

	constructor() {
		this.allTodos = [];
	}

	public getTodos() {
		return this.allTodos;
	}

	// public setTodos(todos: string[]) {
	// 	this.allTodos = todos;
	// }

	public addTodo(todo: string) {
		this.allTodos.push(todo);
	}

	public editTodo(index: number, newValue: string) {
		if(index > -1) {
			this.allTodos[index] = newValue;
		}
	}

	public deleteTodo(index: number) {
		if(index > -1) {
			this.allTodos.splice(index, 1);
		}
	}
}
