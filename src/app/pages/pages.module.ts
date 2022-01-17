import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AdminModule } from '../components/admin/routting/admin.module';
import { StoreModule } from '../components/store/routting/store.module';
import { AuthModule } from '../components/auth/routing/auth.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    AdminModule,
    StoreModule,
    AuthModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
