import { Component } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {
  faEdit = faEdit;
  faDelete = faTrash;
  collection: any = [];
  UserNameFilter: string = "";
  UserListWithoutFilter: any = [];

  constructor(private service: UserService) { }
  ngOnInit(): void {
    this.LoadUser();
  }

  LoadUser() {
    this.service.getUserList().subscribe((result) => {
      this.collection = result;
      this.UserListWithoutFilter = result;
    });
  }

  deleteUser(id: any) {
    if (confirm('you want to delete?')) {
      this.service.deleteUser(id).subscribe((result) => {
        console.log(result);
        this.LoadUser();
      })
    }
  }

  FilterFn() {
    var UserNameFilter = this.UserNameFilter;

    this.collection = this.UserListWithoutFilter.filter(function (el: any) {
      return el.userName.toString().toLowerCase().includes(UserNameFilter.toString().trim().toLowerCase())
    });
  }
}
