import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentsInfo(){
    return this.http.get("http://localhost:3000/studentsInfo");
  }
  addNewStudentInfo(data){
    return this.http.post("http://localhost:3000/studentsInfo",data)
  }
  deleteStudentsInfo(id){
    return this.http.delete("http://localhost:3000/studentsInfo/"+id)
  }
  getCurrentStudentInfo(id){
    return this.http.get("http://localhost:3000/studentsInfo/"+id);
  }
  updateStudentsInfo(id,data){
    return this.http.put("http://localhost:3000/studentsInfo/"+id,data)
  }
}
