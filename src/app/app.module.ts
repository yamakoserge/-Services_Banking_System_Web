import { registerLocaleData } from "@angular/common";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./basic/components/login/login.component";
import { SignupComponent } from "./basic/components/signup/signup.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DemoNgZorroAntdModule } from "./DemoNgZorroAntModule";
import { NgModule } from "@angular/core";
import { NZ_I18N, en_US } from "ng-zorro-antd/i18n";





registerLocaleData(en_US);

@NgModule({
    declarations:[
        AppComponent,
        LoginComponent,
        SignupComponent,
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DemoNgZorroAntdModule,
        ReactiveFormsModule,
    ],
    providers:[
        {provide: NZ_I18N, useValue: en_US}
    ],
    bootstrap: [AppComponent]
})
export class appModule{}