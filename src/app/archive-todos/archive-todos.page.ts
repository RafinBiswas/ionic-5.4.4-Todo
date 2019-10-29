import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';

@Component({
	selector: 'app-archive-todos',
	templateUrl: './archive-todos.page.html',
	styleUrls: ['./archive-todos.page.scss'],
})
export class ArchiveTodosPage implements OnInit {
	public allTodos: string[];

	constructor(private todoService: TodoService) {
		this.allTodos = [];
	}

	ngOnInit() {
		this.allTodos = this.todoService.getTodos();
	}

}
