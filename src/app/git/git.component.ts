import { Component, OnInit, ViewChild } from '@angular/core';
import { GitService } from '../git.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Git, IGit } from '../git';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  public users: any;
  page: Number = 1;
  public updateData: IGit = new Git('', '', '', '', '');
  userId: any;
  userName: string;
  userEmail: string;
  userGender: string;
  userStatus: string;
  isUserDel: boolean;

  constructor(private gitService: GitService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getData()
  }
  public getData() {
    this.gitService.getData().subscribe((data) => {
      this.users = data.data
      console.log(this.users)
    });
  }
  public open(content?, user?, d1User?) {
    if (user) {
      this.isUserDel = false;
      this.userId = user.id;
      this.userName = user.name;
      this.userEmail = user.email;
      this.userGender = user.gender;
      this.userStatus = user.status;
      this.modalService.open(content).result.then(_ => {
        this.updateData = { id: this.userId, name: this.userName, email: this.userEmail, gender: this.userGender, status: this.userStatus };
        this.gitService.updateData(this.updateData)
          .subscribe(_ => this.getData());
      })
    }
    else {
      this.deleteData( d1User,content,user);
    }

  }
  deleteData(content, id, d1User) {
    this.userId = id;
    this.isUserDel = d1User;
    this.modalService.open(content).result.then(_ => {
      this.gitService.deleteData(id).subscribe(_ => {
        this.getData();
      })
    });
  }
}
