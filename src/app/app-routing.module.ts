import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/accounts', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'transfers',
    loadChildren: () => import('./transfers/transfers.module').then(m => m.TransfersModule)
  },
  {
    path: 'bills',
    loadChildren: () => import('./bills/bills.module').then(m => m.BillsModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
