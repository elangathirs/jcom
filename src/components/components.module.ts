import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ExpandableHeader } from './expandable-header/expandable-header';


export const components = [

  ExpandableHeader,

];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components]

})
export class ComponentsModule {}
