import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkComponent } from './homework.component';
import { HomeworkContainerComponent } from './homework-container/homework-container.component';
import { HomeworkHeaderComponent } from './homework-header/homework-header.component';
import { HomeworkSlideComponent } from './homework-slide/homework-slide.component';
import { HomeworkSmartphoneComponent } from './homework-smartphone/homework-smartphone.component';
import { HomeworkLaptopComponent } from './homework-laptop/homework-laptop.component';
import { HomeworkPromotionComponent } from './homework-promotion/homework-promotion.component';
import { HomeworkSmartphoneItemComponent } from './homework-smartphone-item/homework-smartphone-item.component';
import { HomeworkLaptopItemComponent } from './homework-laptop-item/homework-laptop-item.component';
import { HomeworkPromotionItemComponent } from './homework-promotion-item/homework-promotion-item.component';

@NgModule({
  declarations: [HomeworkComponent, HomeworkContainerComponent, HomeworkHeaderComponent, HomeworkSlideComponent, HomeworkSmartphoneComponent, HomeworkLaptopComponent, HomeworkPromotionComponent, HomeworkSmartphoneItemComponent, HomeworkLaptopItemComponent, HomeworkPromotionItemComponent],
  exports: [HomeworkComponent, HomeworkContainerComponent, HomeworkHeaderComponent, HomeworkSlideComponent, HomeworkSmartphoneComponent, HomeworkLaptopComponent, HomeworkPromotionComponent, HomeworkSmartphoneItemComponent, HomeworkLaptopItemComponent, HomeworkPromotionItemComponent],
  imports: [
    CommonModule
  ]
})
export class HomeworkModule { }
