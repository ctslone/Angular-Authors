import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { LikeComponent } from './like/like.component';
import { CapitalizationPipeComponent } from './capitalization-pipe/capitalization-pipe.component';
import { FormPipePipe } from './form-pipe.pipe'


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    LikeComponent,
    CapitalizationPipeComponent,
    FormPipePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
