import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
  }

  onSubmit(studentForm){
    this.dataStore.addNewStudent(studentForm.value.num, studentForm.value.fname, studentForm.value.lname, studentForm.value.prog, studentForm.value.year)
    studentForm.reset();
  }

}
