import { Component } from '@angular/core';
// import { AppComponent } from '../app.component';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly APIUrl = "https://localhost:7248/api/Bus";
  constructor (private http:HttpClient,private router: Router){
    
    
  }
  busDetails:any = null;
  refreshBus(){
    this.http.get(this.APIUrl).subscribe(data=>{
      this.busDetails = data;
      let c = this.busDetails[1];
      console.log(this.busDetails)
    })
  }
  busImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFMDKhF_iy-F849RDJO-xaL_tDhIWvSa943Q0Nk-7xQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_CqFvGe9pA8GRpsEUGD7Ti8eR2w-JRgG5SoiuCWRlA&s',
    'https://th.bing.com/th/id/R.f319d30f440a6b526c512fe7098dae98?rik=KX6K2evERJdUnw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f133458.png&ehk=veDKFetz0WHwarQu24fEPnv7VSqDuNhqxlO3ZgEx00E%3d&risl=&pid=ImgRaw&r=0'
  ];
  
  
  
     ShowDescription :boolean = false;
    //  cardselector(){
    //   this.ShowDescription = !this.ShowDescription;
    //  }

   
     ngOnInit(){
      this.refreshBus();
    }
    onBooking(from :string , to:string,price:number){
      this.router.navigate(['/booking'], { queryParams: { from, to,price } });

    }

    onclick(data:any){
       let selectedFrom = data.From 
       let selectedTo = data.To
       let selectedprice = data.price
       this.onBooking(selectedFrom,selectedTo,selectedprice )

    }
   

   
  
}
