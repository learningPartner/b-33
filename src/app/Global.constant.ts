export const GlobalConstant = {
    menuItems: [
        { 
            lable:'rxjs',
            routeName:  'rxjs',
            allowedRoles: ['SuperAdmin', 'Guest']
        },
        { 
            lable:'Admin',
            routeName:  'adminpage',
            allowedRoles: [ 'SuperAdmin']
        },
        { 
            lable:'Category',
            routeName:  'category',
            allowedRoles: ['Employee','Guest']
        },
        { 
            lable:'Rxjs Adv',
            routeName:  'rxjsadv',
            allowedRoles: ['SuperAdmin', 'Guest']
        },
        { 
            lable:'Data Binding',
            routeName:  'data-binding',
            allowedRoles: ['SuperAdmin']
        },
        
         
    ]
}