import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostComponent} from './post/post.component';
import { GeneratedComponent } from './generated/generated.component';
import { Post2Component } from './post2/post2.component';
import {FormsModule} from '@angular/forms';
import { NgStyleDirectiveComponent } from './ng-style-directive/ng-style-directive.component';
import { NgClassDirectiveComponent } from './ng-class-directive/ng-class-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgIfElseDirectiveComponent } from './ng-if-else-directive/ng-if-else-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    GeneratedComponent,
    Post2Component,
    NgStyleDirectiveComponent,
    NgClassDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgIfElseDirectiveComponent,
    NgForDirectiveComponent,
    BindingComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
