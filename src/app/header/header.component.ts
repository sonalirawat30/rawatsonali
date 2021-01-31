
import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor(private subService:SubjectService) {
  //   this.subService.userName.subscribe(name=>{
  //     this.userName=name})
  //   }

  // ngOnInit(): void {
  // }
  //   userName:string="Sonu";

  //  updateUserName(name){
  //      this.subService.userName.next(name.value)
  //   }
  imageUrl ="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/shaktiman_660_310320050700.jpg";
  fileToUpload=null;
  constructor(private subService: SubjectService) {
    this.subService.imageUpload.subscribe(image => {
      this.imageUrl = image
    })
  }

  ngOnInit(): void {
  }
  selectFiles(file) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  updateUserName(image) {
  console.log("🚀 ~ file: header.component.ts ~ line 43 ~ HeaderComponent ~ updateUserName ~ image",image)
    
    this.subService.imageUpload.next(image)
  }
}
