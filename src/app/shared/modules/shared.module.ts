import { AngularMaterialModule } from './angular-material.module';
import { AccordionComponent } from './../../components/shared/accordion/accordion.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
       AccordionComponent
    ],
    imports: [
        AngularMaterialModule
    ],
    exports: [
        AccordionComponent
    ]
})
export class SharedModule
{
    
}