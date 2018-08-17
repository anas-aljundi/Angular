import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EnrollmentService } from './enrollment.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
/*import { HttpClientModule } from '@angular/common/http';*/

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
/*import { EnrollmentService } from './enrollment.service';*/

@NgModule({
    imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule],
    declarations: [AppComponent,
        routingComponents],
    providers: [EnrollmentService,
                DatePipe],
    //providers: [EnrollmentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
