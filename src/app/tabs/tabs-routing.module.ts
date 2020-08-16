import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path: 'farm',
        loadChildren:() => import('../Pages/farm/farm.module').then(m => m.FarmPageModule)
      },
      {
        path: 'notifications',
        loadChildren:() => import('../Pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'chat',
        loadChildren:() => import('../Pages/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'profile',
        loadChildren:() => import('../Pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'edit-profile',
        loadChildren:() => import('../Pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
      },
      {
        path: 'change-password',
        loadChildren:() => import('../Pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
      },
      {
        path: 'about',
        loadChildren:() => import('../Pages/about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'farm-info',
        loadChildren: () => import('../Pages/farm-info/farm-info.module').then( m => m.FarmInfoPageModule)
      },
      {
        path: 'cattle-info',
        loadChildren: () => import('../Pages/cattle-info/cattle-info.module').then( m => m.CattleInfoPageModule)
      },
      {
        path: 'vaccination-info',
        loadChildren: () => import('../Pages/vaccination-info/vaccination-info.module').then( m => m.VaccinationInfoPageModule)
      },
      {
        path: 'disease-info',
        loadChildren: () => import('../Pages/disease-info/disease-info.module').then( m => m.DiseaseInfoPageModule)
      },
      {
        path: 'breeding-info',
        loadChildren: () => import('../Pages/breeding-info/breeding-info.module').then( m => m.BreedingInfoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
