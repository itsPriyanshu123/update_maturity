import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViewQuoteComponent } from './view-quote/view-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,ViewQuoteComponent,QuoteDetailsComponent,CustomerDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-ui';
 isChildren:boolean = false;



}
