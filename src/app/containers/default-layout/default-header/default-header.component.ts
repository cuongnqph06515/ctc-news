import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { OauthService } from 'src/app/service/oauth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent {

  @Input() sidebarId: string = "sidebar";
  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private authService: OauthService) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }
}
