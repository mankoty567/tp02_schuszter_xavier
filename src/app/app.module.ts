import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { PhonePipe, UserFormComponent } from './user-form/user-form.component';
import { UserResultComponent } from './user-result/user-result.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    UserFormComponent,
    UserResultComponent,
    PhonePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, UserFormComponent],
})
export class AppModule {}
