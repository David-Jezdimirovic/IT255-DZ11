import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { PocetnaComponent } from './stranice/pocetna/pocetna.component';
import { SobeComponent } from './stranice/sobe/sobe.component';
import { KontaktComponent } from './stranice/kontakt/kontakt.component';
import { PretragaSobaComponent } from './stranice/pretraga/pretraga.soba.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchpipePipe } from './pipes/search';
import { SortPipe } from './pipes/sort';
import { RoutingModule } from './routing/routing.module';
import { RegistracijaComponent } from './stranice/registracija/registracija.component';
import { DodavanjeSobeComponent } from './stranice/dodavanjeSobe/dodavanjeSobe.component';




@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    SobeComponent,
    KontaktComponent,
    PretragaSobaComponent,
    SearchpipePipe,
    SortPipe,
    RegistracijaComponent,
    DodavanjeSobeComponent
    

    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
 
  ],
  providers: [],
  exports: [SearchpipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
