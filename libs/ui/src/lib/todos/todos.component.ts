import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@allors/data';

@Component({
  selector: 'allors-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit(): void { }

}
