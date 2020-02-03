import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../webservice.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pessoas-add',
  templateUrl: './pessoas-add.page.html',
  styleUrls: ['./pessoas-add.page.scss'],
})
export class PessoasAddPage implements OnInit {

  dados: any;

  constructor(
    public webservice: WebserviceService,
    private router: Router,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }
  public checkcpf(cpf: string): boolean {
    if (cpf == null) {
      return false;
    }
    if (cpf.length != 11) {
      return false;
    }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
      return false;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) == -1) {
        return false;
      }
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
      digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
      digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
      return false;
    }
    else {
      return true;
    }
  }

  cadastro(form) {

    if (this.checkcpf(form.value.cpf)) {
      alert("CPF Invalido!");
    } else {

      this.webservice.sendpost('/pessoas/store', form.value).then((response) => {
        alert("Pessoa cadastrada com sucesso.");
        this.dados = response;

        this.navCtrl.pop().then(res => {
          location.reload();
        });
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
}
