import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MarkdownModule } from "ngx-markdown";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { FrameworkModule } from "./framework/framework.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrameworkModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
