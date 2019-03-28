import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../model/Todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Array<Todo>
  @Output()
  todoModif: EventEmitter<Todo> = new EventEmitter<Todo>();
  modifTodo(todo) {
    this.todoModif.emit(todo)
  }
  constructor() { }
  ngOnInit() {

  }

}
