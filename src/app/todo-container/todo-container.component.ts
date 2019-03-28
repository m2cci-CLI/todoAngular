import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
import TodoService from '../TodoServices/TodoService';
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor(public todoService: TodoService) { }
  addTodo(texte) {
    this.todoService.addTodo(texte).then(p => this.todos = p)
  }
  updateTodo(todo) {
    this.todoService.updateTodo(todo).then(p => this.todos = p)
  }
  ngOnInit() {
    this.todoService.getTodo().then(p => this.todos = p)

  }
}
