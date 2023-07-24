import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidacaoBrasil } from 'projects/validacao-brasil/src/lib/validators/validacao.brasil';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste';

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formLoad();
  }

  formLoad() {
    this.form = this.fb.group({
      cpf: ['', ValidacaoBrasil.cpf()],
      // cnpj: ['', ValidacaoBrasil.cnpj()],
      // cep: ['', ValidacaoBrasil.cep()],
      // telefone: ['', ValidacaoBrasil.telefone(false)],
      celular: ['', ValidacaoBrasil.celular(true)]
    })
  }
}
