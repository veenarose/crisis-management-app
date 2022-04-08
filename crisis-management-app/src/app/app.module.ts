import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeagoModule } from 'ngx-timeago';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { MapsModule } from './shared/maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { InformationViewComponent } from './information-view/information-view.component';
import { TelegramContentComponent } from './telegram-content/telegram-content.component';
import { ProcessMessageComponent } from './process-message/process-message.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    MapViewComponent,
    DetailsViewComponent,
    InformationViewComponent,
    TelegramContentComponent,
    ProcessMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TimeagoModule.forRoot(),

    NzButtonModule,
    NzRadioModule,
    NzTagModule,
    NzCheckboxModule,
    NzInputModule,
    NzMessageModule,

    MapsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
