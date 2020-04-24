import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {
        path: 'recipes',
        children: [
            {
                path: '',
                loadChildren: './recipes/recipes.module#RecipesPageModule'
            },
            {
                path: ':recipeId',
                loadChildren: './recipes/recipe-detail/recipe-detail.module#RecipeDetailPageModule'
            }
        ]
    },
    {
        path: 'main',
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule)
            }
        ]
    },
    {
        path: 'skills',
        loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsPageModule)
    },
  {
    path: 'dev',
    loadChildren: () => import('./pages/dev/dev.module').then( m => m.DevPageModule)
  },
  {
    path: 'basic',
    loadChildren: () => import('./pages/basic/basic.module').then( m => m.BasicPageModule)
  },
  {
    path: 'experienced',
    loadChildren: () => import('./pages/experienced/experienced.module').then( m => m.ExperiencedPageModule)
  },
  {
    path: 'software',
    loadChildren: () => import('./pages/software/software.module').then( m => m.SoftwarePageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./pages/network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'frameworks',
    loadChildren: () => import('./pages/frameworks/frameworks.module').then( m => m.FrameworksPageModule)
  },
  {
    path: 'live-languages',
    loadChildren: () => import('./pages/live-languages/live-languages.module').then( m => m.LiveLanguagesPageModule)
  },
  {
    path: 'network-basic',
    loadChildren: () => import('./pages/network-basic/network-basic.module').then( m => m.NetworkBasicPageModule)
  },
  {
    path: 'network-software',
    loadChildren: () => import('./pages/network-software/network-software.module').then( m => m.NetworkSoftwarePageModule)
  },
  {
    path: 'beginner',
    loadChildren: () => import('./pages/beginner/beginner.module').then( m => m.BeginnerPageModule)
  },
  {
    path: 'advanced',
    loadChildren: () => import('./pages/advanced/advanced.module').then( m => m.AdvancedPageModule)
  },
  {
    path: 'studies',
    loadChildren: () => import('./pages/studies/studies.module').then( m => m.StudiesPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./pages/personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'personal-interests',
    loadChildren: () => import('./pages/personal-interests/personal-interests.module').then( m => m.PersonalInterestsPageModule)
  },
  {
    path: 'professional-experience',
    loadChildren: () => import('./pages/professional-experience/professional-experience.module')
        .then( m => m.ProfessionalExperiencePageModule)
  },
  {
    path: 'mobile-dev',
    loadChildren: () => import('./pages/mobile-dev/mobile-dev.module').then( m => m.MobileDevPageModule)
  },
  {
    path: 'websites',
    loadChildren: () => import('./pages/websites/websites.module').then( m => m.WebsitesPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
