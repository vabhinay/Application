import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseCubeService {

  private courseCubeList: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  constructor(public http: HttpClient) { }
  setCourseCubeList(courseCubeList) {
    this.courseCubeList.next(courseCubeList);
  }
  getCourseCubeList() {
    return this.courseCubeList.asObservable();
  }
  getCourseCube(){
    return this.http.get('assets/resource/courseCube.json');
  }
}
