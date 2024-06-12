import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
    { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) },
    { path: 'hr', loadChildren: () => import('./hr/hr.module').then(m => m.HRModule) },
    { path: 'finance', loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  
];
