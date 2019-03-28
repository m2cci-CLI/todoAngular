import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../model/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo

  @Output()
  todoSelected: EventEmitter<Todo> = new EventEmitter<Todo>();
  changeTodo() {
    this.todoSelected.emit(this.todo);
  }
  constructor() { }
  handleCheckBoxChange() {
    this.todo.isDone = !this.todo.isDone;
    this.changeTodo();
  }
  ngOnInit(): void {
  }
  isDone(){
    return this.todo.isDone
  }
}
