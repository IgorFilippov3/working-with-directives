import { Component } from '@angular/core';
import { UserStatusService } from "src/app/services/user-status.service";
import { UserStatus } from "src/app/models/user-status.enum";

@Component({
  selector: 'app-root',
  template: `
    <section>
      <div *userStatus="UserStatus.ANONYMOUS">I am anonymous user</div>
      <div *userStatus="UserStatus.USER">I am common user</div>
      <div *userStatus="UserStatus.ADMIN">I am admin user</div>
      <hr/>
      <div>
        <Button (click)="changeUserStatus(UserStatus.ANONYMOUS)">Anonymous</Button>
      </div>
      <div>
        <Button (click)="changeUserStatus(UserStatus.USER)">User</Button>
      </div>
      <div>
        <Button (click)="changeUserStatus(UserStatus.ADMIN)">Admin</Button>
      </div>
    </section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserStatus = UserStatus;

  constructor(private userStatusService: UserStatusService) {}

  changeUserStatus(status: UserStatus): void {
    this.userStatusService.changeUserStatus(status);
  }
}
