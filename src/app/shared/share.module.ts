// in this module we will create common things with admin and app

import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// @ts-ignore
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule]
})

export class ShareModule {
  
}
