var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Ionic2Rating } from './ionic2-rating';
var Ionic2RatingModule = /** @class */ (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule = __decorate([
        NgModule({
            declarations: [
                Ionic2Rating
            ],
            exports: [
                Ionic2Rating
            ],
            imports: [
                CommonModule,
                IonicModule
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
    ], Ionic2RatingModule);
    return Ionic2RatingModule;
}());
export { Ionic2RatingModule };
//# sourceMappingURL=ionic2-rating.module.js.map