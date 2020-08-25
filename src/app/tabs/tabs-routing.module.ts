import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'farm',
        loadChildren: () => import('../Pages/farm/farm.module').then(m => m.FarmPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../Pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../Pages/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../Pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('../Pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
      },
      {
        path: 'change-password',
        loadChildren: () => import('../Pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../Pages/about/about.module').then(m => m.AboutPageModule)
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
      },
      {
        path: 'add-farm',
        loadChildren: () => import('../pages/add-farm/add-farm.module').then( m => m.AddFarmPageModule)
      },
      {
        path: 'add-cattle',
        loadChildren: () => import('../pages/add-cattle/add-cattle.module').then( m => m.AddCattlePageModule)
      },
      {
        path: 'add-vaccination',
        loadChildren: () => import('../pages/add-vaccination/add-vaccination.module').then( m => m.AddVaccinationPageModule)
      },
      {
        path: 'add-disease',
        loadChildren: () => import('../pages/add-disease/add-disease.module').then( m => m.AddDiseasePageModule)
      },
      {
        path: 'add-breeding',
        loadChildren: () => import('../pages/add-breeding/add-breeding.module').then( m => m.AddBreedingPageModule)
      },
      {
        path: 'farmfinder',
        loadChildren: () => import('../pages/farmfinder/farmfinder.module').then( m => m.FarmfinderPageModule)
      },
      {
        path: 'qrscan',
        loadChildren: () => import('../pages/qrscan/qrscan.module').then( m => m.QrscanPageModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('../pages/qr/qr.module').then( m => m.QrPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../pages/help/help.module').then( m => m.HelpPageModule)
      },
      {
        path: 'sickcattle',
        loadChildren: () => import('../pages/sickcattle/sickcattle.module').then( m => m.SickcattlePageModule)
      },
      {
        path: 'vaccinecattle',
        loadChildren: () => import('../pages/vaccinecattle/vaccinecattle.module').then( m => m.VaccinecattlePageModule)
      },
      {
        path: 'pregnantcattle',
        loadChildren: () => import('../pages/pregnantcattle/pregnantcattle.module').then( m => m.PregnantcattlePageModule)
      },
      {
        path: 'farmhouse',
        loadChildren: () => import('../pages/farmhouse/farmhouse.module').then( m => m.FarmhousePageModule)
      },
      {
        path: 'cattlehouse',
        loadChildren: () => import('../pages/cattlehouse/cattlehouse.module').then( m => m.CattlehousePageModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('../pages/notes/notes.module').then( m => m.NotesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
