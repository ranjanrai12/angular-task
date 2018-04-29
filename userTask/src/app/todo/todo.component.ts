import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoListArray;	
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  	this.todoService.getTodoList()
  	.subscribe(
  		data=>{
  			console.log(data)
  			this.todoListArray = data
  		}
  	)
  }
  onAddTitle(title){
  	this.todoService.addTitle(title.value)
  }
  onDelete($key){
  	this.todoService.removeTitle($key)
  }
  alterCheck($key:string,ischecked){
    this.todoService.checkoronchecktitle($key,!ischecked)
  }
}
