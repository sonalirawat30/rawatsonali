import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private subService:SubjectService) {
      this.subService.imageUpload.subscribe(name=>{
      console.log("🚀 ~ file: profile.component.ts ~ line 13 ~ ProfileComponent ~ constructor ~ name", name)
        this.imageUrl=name})
    }

  ngOnInit(): void {
  }  imageUrl="IMG-20190128-WA0007.JPG";
  //  updateUserName(name){
  //      this.subService.imageUpload.next(.value)
  }


// constructor(private subService: SubjectService) {
//   this.subService.profileImage.subscribe(image => {
//     this.profileImage = image
//   })
// }

// ngOnInit(): void {
// }
// 

// updateUserName(image) {
//   this.subService.profileImage.next(this.profileImage)
// }
