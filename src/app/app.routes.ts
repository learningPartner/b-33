import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { DataTypes } from './components/data-types/data-types';
import { NotFound } from './components/not-found/not-found';
import { HideShowNgIf } from './components/hide-show-ng-if/hide-show-ng-if';
import { NgForLoop } from './components/ng-for-loop/ng-for-loop';
import { AttDirective } from './components/att-directive/att-directive';
import { GetAPI } from './components/get-api/get-api';
import { Signal } from './components/signal/signal';
import { User } from './components/user/user';
import { Category } from './components/category/category';
import { Departments } from './components/departments/departments';
import { ViewChildEx } from './components/view-child-ex/view-child-ex';
import { RxjsEx } from './components/rxjs-ex/rxjs-ex';
import { ReactiveFormAdv } from './components/reactive-form-adv/reactive-form-adv';
import { UserForm } from './components/user-form/user-form';
import { Rxjs2 } from './components/rxjs2/rxjs2';
import { Logic } from './components/logic/logic';
import { Login } from './components/login/login';
import { AdminLayout } from './components/admin-layout/admin-layout';
import { authGuard } from './guards/auth-guard';
import { roleBasedGuard } from './guards/role-based-guard';
import { EmployeeList } from './components/employee-list/employee-list';
import { FormArrayExample } from './components/form-array/form-array';

export const routes: Routes = [

    {
        path: '',
        component: Login,
        pathMatch: 'full'
    },
    {
        path: '',
        component: AdminLayout,
       // canActivate: [authGuard,roleBasedGuard],
        children: [
            {
                path: 'adminpage',
                component: Admin
            },
            {
                path: 'rxjs',
                component: RxjsEx
            },
             {
                path: 'form-array',
                component: FormArrayExample
            },
            {
                path: 'employee',
                component: EmployeeList
            },
            {
                path: 'rxjsadv',
                component: Rxjs2
            },
            {
                path: 'reactiive-form-adv',
                component: ReactiveFormAdv
            },
            {
                path: 'data-binding',
                component: DataBinding
            },
            {
                path: 'category',
                component: Category
            },
            {
                path: 'logic',
                component: Logic
            },
            {
                path: 'viewchildex',
                component: ViewChildEx
            },
            {
                path: 'dataTypes',
                component: DataTypes
            },
            {
                path: 'departments',
                component: Departments
            },
            {
                path: 'hideshow',
                component: HideShowNgIf
            },
            {
                path: 'ngfor',
                component: NgForLoop
            },
            {
                path: 'get-api',
                component: GetAPI
            },
            {
                path: 'att-Dir',
                component: AttDirective
            },
            {
                path: 'signal',
                component: Signal
            },
            {
                path: 'users',
                component: User
            },
            {
                path: 'userform/:id',
                component: UserForm
            },
        ]
    },
    // {
    //     path: '**',
    //     component: NotFound
    // }

];


//object of Component Link / Url
