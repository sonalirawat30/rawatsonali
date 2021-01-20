import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import {IGit} from '../git';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
   public users:any;
  constructor(private gitService:GitService) { }

  ngOnInit(): void {
  
  this.gitService.getData().subscribe((data) => {
      this.users=data.data;
  });
}
}
  