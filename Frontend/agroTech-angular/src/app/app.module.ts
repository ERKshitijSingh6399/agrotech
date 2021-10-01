import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { UpdateFarmerComponent } from './update-farmer/update-farmer.component';
import { AgriFeedComponent } from './agri-feed/agri-feed.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteFarmerComponent } from './delete-farmer/delete-farmer.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewAllOrdersComponent } from './view-all-orders/view-all-orders.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddInformationComponent } from './add-information/add-information.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ViewAllFarmersComponent } from './view-all-farmers/view-all-farmers.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { GetFarmerByAgeComponent } from './get-farmer-by-age/get-farmer-by-age.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ViewCompanyComponent } from './view-company/view-company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LearnComponent,
    UpdateFarmerComponent,
    AgriFeedComponent,
    FooterComponent,
    ContentComponent,
    DeleteFarmerComponent,
    ViewOrdersComponent,
    ViewAllOrdersComponent,
    MyProfileComponent,
    AddInformationComponent,
    AddProductsComponent,
    ViewAllFarmersComponent,
    CartComponent,
    ProductsComponent,
    GetFarmerByAgeComponent,
    AddCompanyComponent,
    ViewCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
