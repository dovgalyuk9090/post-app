// in this module we will create common things with admin and app

import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';

// @ts-ignore
@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ]
})

export class ShareModule {
  
}
