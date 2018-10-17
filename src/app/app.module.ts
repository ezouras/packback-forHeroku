import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CsBannerComponent } from './case-studies/cs-banner/cs-banner.component';
import { CsQuestionsComponent } from './case-studies/cs-questions/cs-questions.component';
import { CsInteractionComponent } from './case-studies/cs-interaction/cs-interaction.component';
import { CsStatsComponent } from './case-studies/cs-stats/cs-stats.component';
import { FormComponent } from './form/form.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { UserService } from './user/user.service';

const appRoutes: Routes = [
  {path: '',component:CaseStudiesComponent},
  {path:"form",component:FormComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    CsBannerComponent,
    CsQuestionsComponent,
    CsInteractionComponent,
    CsStatsComponent,
    FormComponent,
    RequestDemoComponent,
    CaseStudiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
