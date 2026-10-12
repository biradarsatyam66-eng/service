import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoDashboardComponent } from "./components/todo-dashboard/todo-dashboard.component";
import { StdDashboardComponent } from "./components/std-dashboard/std-dashboard.component";
import { PostDashboardComponent } from "./components/post-dashboard/post-dashboard.component";
import { MovieDashboardComponent } from "./components/movie-dashboard/movie-dashboard.component";
import { Post2DashboardComponent } from "./components/post2-dashboard/post2-dashboard.component";


const routes : Routes = [
    {
        path:'',
        redirectTo:'todos',
        pathMatch:'full'
    },
    {
        path:'todos',
        component : TodoDashboardComponent
    },
    {
        path:'students',
        component:StdDashboardComponent
    },
    {
        path:'posts',
        component:PostDashboardComponent
    },
    {
        path:'movies',
        component:MovieDashboardComponent
    },
    {
        path:'posts2',
        component:Post2DashboardComponent
    }
]



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}