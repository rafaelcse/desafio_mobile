import { Component } from '@angular/core';
import { WebserviceService } from '../webservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    pessoas: any;
    dados:any;

  constructor(
    public webservice: WebserviceService,
    private router: Router
  ) { }

  ngOnInit() {

    this.pessoas = [];
    this.webservice.sendpost('/pessoas/all', {'send':1 }).then((response) => {
      this.dados = response;
      this.pessoas = this.dados.dados;
    }).catch((error) => {
      this.dados = error;
      if (this.dados.status === 401) {
        alert(this.dados.error.errors[0]);
      } else {
        alert('Falha de comunicação');
      }
    });
  }

  add() {
    this.router.navigateByUrl('/pessoas-add');
  }

  edit(pessoa) {
    this.router.navigateByUrl('/pessoas-edit',{ state:{'id':pessoa.id}});
  }

  remove(pessoa) {

      this.webservice.sendpost('/pessoas/delete/' + pessoa.id, {}).then((response) => {
        this.dados = response;
        location.reload();
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