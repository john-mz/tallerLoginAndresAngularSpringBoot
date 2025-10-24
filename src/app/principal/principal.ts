import { Component } from '@angular/core';
import { AuthRoutingModule } from "../auth/auth-routing-module";

@Component({
  selector: 'app-principal',
  imports: [AuthRoutingModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

}
