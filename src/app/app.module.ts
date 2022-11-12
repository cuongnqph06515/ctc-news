import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";

import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  SpinnerModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JWTInterceptor } from './helpers/jwt.interceptor';
import { LoginComponent } from './views/login/login.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { HubModule } from './views/hub-management/hub.module';

registerLocaleData(en);

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};



@NgModule({
  declarations: [AppComponent,  DefaultFooterComponent,
    DefaultHeaderComponent,
    DefaultLayoutComponent,
    LoginComponent,
     ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormModule,
    
    
    HttpClientModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    SpinnerModule,
    ToastrModule.forRoot(),
    FormsModule,
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    IconSetService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
