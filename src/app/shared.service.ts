import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  shStudentCollection: Array<object> = [];
  studentObject: {studnum: number, firstname: string, lastname: string, prog: string, year:number};

  constructor() { }

  addNewStudent(shNumber: number, shFirstName: string, shLastName: string, shProg: string, shYear:number){
    this.studentObject = {
      studnum: shNumber,
      firstname: shFirstName,
      lastname: shLastName,
      prog: shProg,
      year: shYear
    }
    this.shStudentCollection.push(this.studentObject);
  }

  getStudent(): Array<object>{
    return this.shStudentCollection;
  }

}
