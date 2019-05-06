import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CategriaComponent } from './components/categria/categria.component';
import { InputComponent } from './shared/input/input.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoriaModalComponent } from './components/categoria-modal/categoria-modal.component';
import { CategoriaService } from './services/categoria.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    CategriaComponent,
    InputComponent,
    CategoriaModalComponent
  ],
  entryComponents: [ CategoriaModalComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ CategoriaModalComponent ],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
