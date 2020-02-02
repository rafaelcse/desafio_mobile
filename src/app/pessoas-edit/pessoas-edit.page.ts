import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../webservice.service';
import { Router, NavigationStart } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoas-edit',
  templateUrl: './pessoas-edit.page.html',
  styleUrls: ['./pessoas-edit.page.scss'],
})

  // export class contact {
  //   codigo_xyz:string;
  //   nome:string;
  //   email:string;
  //   cpf:string;
  //   rg:boolean;
  //   nascimento:string;
  //   salario:string;
  //   peso:string;
  //   altura:string;
  // }  
 
export class PessoasEditPage implements OnInit {

  dados: any;
  state: any;
  codigo_xyz: any;
  nome: any;
  email: any;
  cpf: any;
  rg: any;
  nascimento: any;
  salario: any;
  peso: any;
  altura: any;

  
  constructor(
    public webservice: WebserviceService,
    private router: Router,
    private location: Location,
  ) { }
 
  //     codigo_xyz: this.dados.dados.codigo_xyz,
  //     nome: this.dados.dados.nome,
  //     email: this.dados.dados.email,
  //     cpf: this.dados.dados.cpf,
  //     rg: this.dados.dados.rg,
  //     nascimento: this.dados.dados.nascimento,
  //     salario: this.dados.dados.salario,
  //     peso: this.dados.dados.peso,
  //     altura: this.dados.dados.altura,




     
  //   });
  // }


  ngOnInit() {
    

    this.state =  this.location.getState();

    console.log(this.state);
    console.log(this.state.id);
    this.webservice.sendpost('/pessoas/get/' + this.state.id, {}).then((response) => {

      this.dados = response;

        this.codigo_xyz = this.dados.dados.codigo_xyz;
        this.nome = this.dados.dados.nome;
        this.email = this.dados.dados.email;
        this.cpf = this.dados.dados.cpf;
        this.rg = this.dados.dados.rg;
        this.nascimento = this.dados.dados.nascimento;
        this.salario = this.dados.dados.salario;
        this.peso = this.dados.dados.peso;
        this.altura = this.dados.dados.altura;
      

      //this.router.navigateByUrl('/home');
    }).catch((error) => {
      this.dados = error;
      if (this.dados.status === 401) {
        alert(this.dados.error.errors[0]);
      } else {
        alert('Falha de comunicação');
      }
    });
  }

  cadastro(form) {
    this.webservice.sendpost('/pessoas/update/' + this.state.id, form.value).then((response) => {
      alert("Pessoa atualizada com sucesso.");
      this.dados = response;
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      this.dados = error;
      if (this.dados.status === 401) {
        alert(this.dados.error.errors[0]);
      } else {
        alert('Falha de comunicação');
      }
    });
  }
}
