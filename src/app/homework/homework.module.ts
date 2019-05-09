import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkComponent } from './homework.component';
import { HomeworkContainerComponent } from './homework-container/homework-container.component';
import { HomeworkHeaderComponent } from './homework-header/homework-header.component';
import { HomeworkSlideComponent } from './homework-slide/homework-slide.component';
import { HomeworkSmartphoneComponent } from './homework-smartphone/homework-smartphone.component';
import { HomeworkLaptopComponent } from './homework-laptop/homework-laptop.component';
import { HomeworkPromotionComponent } from './homework-promotion/homework-promotion.component';
import { HomeworkPromotionItemComponent } from './homework-promotion-item/homework-promotion-item.component';
import { HomeworkProductItemComponent } from './homework-product-item/homework-product-item.component';

@NgModule({
  declarations: [HomeworkComponent, HomeworkContainerComponent, HomeworkHeaderComponent, HomeworkSlideComponent, HomeworkSmartphoneComponent, HomeworkLaptopComponent, HomeworkPromotionComponent, HomeworkPromotionItemComponent, HomeworkProductItemComponent],
  exports: [HomeworkComponent, HomeworkContainerComponent, HomeworkHeaderComponent, HomeworkSlideComponent, HomeworkSmartphoneComponent, HomeworkLaptopComponent, HomeworkPromotionComponent, HomeworkPromotionItemComponent, HomeworkProductItemComponent],
  imports: [
    CommonModule
  ]
})
export class HomeworkModule { }
