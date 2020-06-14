import { BehaviorSubject, Observable } from "rxjs";
import { UserStatus } from "src/app/models/user-status.enum";

export class UserStatusService {

  private userStatusSource: BehaviorSubject<UserStatus> = new BehaviorSubject(null);
  userStatus$: Observable<UserStatus> = this.userStatusSource.asObservable();

  changeUserStatus(status): void {
    this.userStatusSource.next(status);
  }
}