import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string = '';


  @Output()
  todoAdd: EventEmitter<String> = new EventEmitter<String>();

  todoAjout() {
    this.todoAdd.emit(this.title);
  }

  handleChange(event) {
   this.title=event.target.value
  }
  constructor() { }

  
  ngOnInit() {
  }

}
