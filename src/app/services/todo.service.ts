import { Injectable } from '@angular/core';
import { PostService } from './API/post.service';

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	private allTodos: any[];

	constructor(private postService: PostService) {
	}

	public async getTodos() {
		if (this.allTodos !== undefined) {
			return this.allTodos;
		} else {
			await this.postService.getPosts().then((reselve) => {
				this.allTodos = reselve;
			});

			return this.allTodos;
		}
	}

	// public setTodos(todos: string[]) {
	// 	this.allTodos = todos;
	// }

	public addTodo(todo: string) {
		this.allTodos.push({
			title: todo,
			media: '',
		});
	}

	public editTodo(index: number, newValue: string) {
		if (index > -1) {
			this.allTodos[index].title = newValue;
		}
	}

	public deleteTodo(index: number) {
		if (index > -1) {
			this.allTodos.splice(index, 1);
		}
	}
}
