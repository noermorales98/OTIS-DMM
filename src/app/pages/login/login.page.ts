import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  //registrarse
  registrar(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.register(email,password).then(res=>{
      console.log(res);
    })
  }

  ingresar(){
    console.log(this.usuario);
    const{email, password} = this.usuario;
    this.authService.login(email,password).then(res=>{
      console.log(res);
    })
  }
  
  ingresarGoogle(){
    console.log(this.usuario);
    const{email, password} = this.usuario;
    this.authService.loginWithGoogle(email,password).then(res=>{
      console.log(res);
    })
  }

  logout(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    });
  }

  getUserLogged(){
    this.authService.logout();
  }


}
