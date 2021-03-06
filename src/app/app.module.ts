import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { LikeComponent } from './like/like.component';
import { CapitalizationPipeComponent } from './capitalization-pipe/capitalization-pipe.component';
import { FormPipePipe } from './form-pipe.pipe';
import { PanelComponent } from './panel/panel.component';
import { TwitterLikeComponent } from './twitter-like/twitter-like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component'


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    LikeComponent,
    CapitalizationPipeComponent,
    FormPipePipe,
    PanelComponent,
    TwitterLikeComponent,
    InputFormatDirective,
    ZippyComponent,
    
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
