import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor() { }
  addTodo(texte){
    let x:number= this.todos.length
    this.todos.push(new Todo(texte, false,x));
  }
  updateTodo(todo) {
    let index = this.todos.findIndex(t => t.id === todo.id);
    this.todos[index].isDone = todo.isDone
  }
  ngOnInit() {
    this.todos = [];
    
  }
}
