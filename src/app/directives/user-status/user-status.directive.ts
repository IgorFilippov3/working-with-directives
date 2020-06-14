import { Directive, Input, EmbeddedViewRef, OnInit, OnDestroy, ViewContainerRef, TemplateRef } from "@angular/core";
import { UserStatusService } from "src/app/services/user-status.service";
import { Subject } from "rxjs";
import { takeUntil, map } from "rxjs/operators";
import { UserStatus } from "src/app/models/user-status.enum";

@Directive({
  selector: "[userStatus]"
})
export class UserStatusDirective implements OnInit, OnDestroy {
  // input has the same name as directive selector.
  // thanks to this we can write in this way - *userStatus="status"
  @Input("userStatus") status: string;

  private isDestroyed$: Subject<void> = new Subject();

  constructor(
    private userStatusService: UserStatusService,
    private viewContainer: ViewContainerRef, // 
    private templateRef: TemplateRef<any>,
  ) { }

  ngOnInit(): void {
    this.userStatusService.userStatus$
      .pipe(
        map((userStatus: UserStatus) => userStatus === this.status),
        takeUntil(this.isDestroyed$)
      )
      .subscribe((isPermitted: boolean) => {
        if (isPermitted) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy() {
    this.isDestroyed$.next();
    this.isDestroyed$.complete();
  }
}

// the place where we will insert or not our element
  // private view: EmbeddedViewRef<any> = null;

// prevent from duplicates
        // if (this.viewContainer.length) {
        //   this.viewContainer.remove();
        // }