import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddInformationComponent } from './add-information/add-information.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AgriFeedComponent } from './agri-feed/agri-feed.component';
import { CartComponent } from './cart/cart.component';
import { DeleteFarmerComponent } from './delete-farmer/delete-farmer.component';
import { FooterComponent } from './footer/footer.component';
import { GetFarmerByAgeComponent } from './get-farmer-by-age/get-farmer-by-age.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UpdateFarmerComponent } from './update-farmer/update-farmer.component';
import { ViewAllFarmersComponent } from './view-all-farmers/view-all-farmers.component';
import { ViewAllOrdersComponent } from './view-all-orders/view-all-orders.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';



const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'home',component:HomeComponent},
  {path: 'learn',component:LearnComponent},
  {path: 'updateFarmer',component:UpdateFarmerComponent},
  {path: 'agriFeed',component:AgriFeedComponent},
  {path: 'footer',component:FooterComponent},
  {path: 'deleteFarmer',component:DeleteFarmerComponent},
  {path: 'viewOrders',component:ViewOrdersComponent},
  {path: 'viewAllOrders',component:ViewAllOrdersComponent},
  {path: 'myProfile',component:MyProfileComponent},
  {path: 'addInformation',component:AddInformationComponent},
  {path: 'addProducts',component:AddProductsComponent},
  {path: 'cart',component:CartComponent},
  {path: 'products',component:ProductsComponent},
  {path: 'viewAllFarmers',component:ViewAllFarmersComponent},
  {path: 'getFarmerByAge',component:GetFarmerByAgeComponent},
  {path: 'addCompany',component:AddCompanyComponent},
  {path: 'viewCompany',component:ViewCompanyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
