import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageUrl;
  constructor(private subService: SubjectService) {
         this.subService.imageUpload.subscribe(image=>{
           this.imageUrl=image})
  }

  ngOnInit(): void {
  } 

}