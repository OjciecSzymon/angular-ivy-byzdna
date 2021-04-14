import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './services/home.service';
import { DefinitionComponent } from './components/home/definition/definition.component';
import { ChooseProductsComponent } from './components/home/choose-products/choose-products.component';
import { ExcludeProductsComponent } from './components/home/exclude-products/exclude-products.component';
import { ChooseClientsComponent } from './components/home/choose-clients/choose-clients.component';
import { ExcludeClientsComponent } from './components/home/exclude-clients/exclude-clients.component';
import { ClientsLimitsComponent } from './components/home/clients-limits/clients-limits.component';
import { SummaryComponent } from './components/home/summary/summary.component';
import { BonusProductsComponent } from './components/home/bonus-products/bonus-products.component';
import { ProductsLimitsComponent } from './components/home/products-limits/products-limits.component';
import { GridComponent } from './components/home/summary/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefinitionComponent,
    ChooseProductsComponent,
    ExcludeProductsComponent,
    ChooseClientsComponent,
    ExcludeClientsComponent,
    ClientsLimitsComponent,
    SummaryComponent,
    BonusProductsComponent,
    ProductsLimitsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    HomeService, 
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
