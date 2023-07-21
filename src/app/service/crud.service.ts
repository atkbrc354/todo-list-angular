import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  [x: string]: any;
  taskArray = [{taskName: 'Brush teeth', isComplited: false}];

  constructor() { 
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {

  }
}
