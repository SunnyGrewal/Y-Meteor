import { NgModule } from '@angular/core';

import { routing } from './salesManager.routing';
import {SharedModule} from "../../modules/shared-module";
import {CommonModule} from "@angular/common";
import {MaterialImportModule} from "../../app/material-import.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SALESMANAGER_DECLARATIONS} from "./index";
import {DpDatePickerModule} from 'ng2-date-picker';
// import { EXECUTIVE_DECLARATIONS } from '../executive/';
@NgModule({
  imports: [
    routing,
    SharedModule,
    CommonModule,
    FormsModule,
    MaterialImportModule,
    RouterModule,
    ReactiveFormsModule,
    DpDatePickerModule,
  ],
  declarations: [SALESMANAGER_DECLARATIONS]
})
export class SalesManagerModule {}
// 