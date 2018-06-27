import { Component, OnInit } from '@angular/core';

import { CourseCube } from './course-cube';
import { CourseCubeService } from '../../service/course-cube.service';

@Component({
  selector: 'cc-course-cube',
  templateUrl: './course-cube.component.html',
  styleUrls: ['./course-cube.component.scss']
})
export class CourseCubeComponent implements OnInit {
  courseCubeList:Array<CourseCube> = new Array<CourseCube>();
  heroInput:any = "";
  constructor(public courseCubeService:CourseCubeService) { }

  ngOnInit() {
    this.courseCubeService.getCourseCubeList().subscribe((courseCubeResponse: Array<CourseCube>) => {
      this.courseCubeList = courseCubeResponse ? courseCubeResponse : [];
    });
  }


  addCourse(){
    
    let courseCube = new CourseCube();
    courseCube.id = 10;

    this.courseCubeList.push(courseCube);
    
    this.courseCubeService.getCourseCubeList().subscribe((courseCubeResponse: Array<CourseCube>) => {
      console.log(courseCubeResponse);
    });
  }
}
  