import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../webservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-add',
  templateUrl: './pessoas-add.page.html',
  styleUrls: ['./pessoas-add.page.scss'],
})
export class PessoasAddPage implements OnInit {

  dados: any;

  constructor(
    public webservice: WebserviceService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  cadastro(form) {
    this.webservice.sendpost('/pessoas/store', form.value).then((response) => {
      alert("Pessoa cadastrada com sucesso.");
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
