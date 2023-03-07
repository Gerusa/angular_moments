import { Component, Input, OnInit } from '@angular/core';

//importacao do formGroup... esta sendo usado no html
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  // o exclamacao diz que pode nao existir
  @Input() btnText!:string;

  momentForm!: FormGroup;

  //usado para inicializar coisas do angular
  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
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
  }

}
