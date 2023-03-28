import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

//importacao do formGroup... esta sendo usado no html
import { FormGroup, FormControl, Validators } from '@angular/forms';

//importacao da interface
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  //input sao dados que estao chegando
  // o exclamacao diz que pode nao existir
  @Input() btnText!:string;
  @Input() momentData: Moment | null = null;

  // o que eh compartilhado com outro componente
  @Output() onSubmit = new EventEmitter<Moment>()

  momentForm!: FormGroup;

  //usado para inicializar coisas do angular
  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id : ''),
      title: new FormControl(this.momentData ? this.momentData.title : '', [Validators.required]),
      description: new FormControl(this.momentData ? this.momentData.description : '', [Validators.required]),
      image: new FormControl(''),
    })
  }

  //usados na validacao
  get title() {
    return this.momentForm.get('title')!;
  }
  get description() {
    return this.momentForm.get('description')!;
  }

  onFileSelected(event: any) {

    //pega o primeiro arquivo
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file });

  }

  submit() {
    if(this.momentForm.invalid) {
      return;
    }

    console.log('Enviou formulário: ', this.momentForm.value);

    //esta enviando os dados do formulario para outro componente
    this.onSubmit.emit(this.momentForm.value);
  }

}
