import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

import { TodoService } from '../services/todo.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})

export class HomePage {
	public allTodos: any[];
	public isDisabledReordering: boolean;
	public isNotEmptyTodo: boolean;

	constructor(
		private alertController: AlertController, 
		private toastController: ToastController, 
		private todoService: TodoService
	) {
		this.allTodos = [];
		this.isNotEmptyTodo = false;
		this.isDisabledReordering = true;
		
		this.todoService.getTodos().then((resolve) => {
			this.allTodos = resolve;
			this.isNotEmptyTodo = (this.allTodos.length > 1) ? true : false;
		});
	}

	private async openTodoAlert() {
		const addTodoAlert = await this.alertController.create({
			message: 'Enter your todo',
			inputs: [
				{
					type: 'text',
					name: 'addTodoText'
				}
			],
			buttons: [
				{
					text: 'Cancle'
				},
				{
					text: 'Add',
					handler: (inputData) => {
						let todoText = inputData.addTodoText;

						this.todoService.addTodo(todoText);
						this.isNotEmptyTodo = (this.allTodos.length > 1) ? true : false;

						addTodoAlert.onDidDismiss().then((resolve) => {
							this.showTostMessage('Todo added to list.')
						});
					}
				}
			]
		});
		await addTodoAlert.present();
	}

	private async showTostMessage(message: string) {
		const tostMessage = await this.toastController.create({
			message: message,
			duration: 1500,
		});

		await tostMessage.present();
	}

	private enabledReordering() {
		this.isDisabledReordering = false;
	}

	private disabledReordering() {
		this.isDisabledReordering = true;
	}

	private doReorder(event: any) {
		// console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

		this.todoService.getTodos().then((resolve) => {
			event.detail.complete(resolve);
		});
	}

	private deleteTodo(index: number) {
		this.todoService.deleteTodo(index);
		this.isNotEmptyTodo = (this.allTodos.length > 1) ? true : false;
	}

	private async editTodo(index: number) {
		let currentValue = (index > -1) ? this.allTodos[index].title : '';

		const editTodoAlert = await this.alertController.create({
			message: 'Enter your todo',
			inputs: [
				{
					type: 'text',
					value: currentValue,
					name: 'editTodoText'
				}
			],
			buttons: [
				{
					text: 'Cancle'
				},
				{
					text: 'Update',
					handler: (inputData) => {
						let todoText = inputData.editTodoText;

						this.todoService.editTodo(index, todoText);
					}
				}
			]
		});

		await editTodoAlert.present();
	}

	// private goToArchivePage() {
	// 	this.navController.navigateRoot('/archive-todos');
	// }
}
