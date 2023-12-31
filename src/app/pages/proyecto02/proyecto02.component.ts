import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ComentarioUsuario} from '../../interfaces/comentarioUsuario';

@Component({
  selector: 'app-proyecto02',
  templateUrl: './proyecto02.component.html',
  styleUrls: ['./proyecto02.component.scss']
})
export class Proyecto02Component {
  ngOnInit(): void {
    const respuestasGuardadas = localStorage.getItem('respuestas');
    if (respuestasGuardadas) {
      this.respuestas = JSON.parse(respuestasGuardadas);
    }    

  }
  buttonReply: number | null = null;
  // Id del boton reply segun iteracion;
  idButton: string = '';

  comentarioUsuario: ComentarioUsuario[] = [
    {
      id: 1,
      img: '../../../assets/img/proyect02/avatars/image-amyrobson.png',
      nombre: 'amyribson',
      time: '1 month ago',
      comment: `Impressivel Though it seems the drag
      feature could be improved. But overall it
      looks incredible. You've nailed the design
      and the responsiveness at various
      breakpoints works really well.`,
      answers: [
        
      ]
    },
    {
      id: 2,
      img: '../../../assets/img/proyect02/avatars/image-maxblagun.png',
      nombre: 'maxblagun',
      time: '2 weeks ago',
      comment: `Woah, your project looks awesome! How
      long have you been coding for? I'm still
      new, but think I want to dive into React
      as well soon. Perhaps you can give me an
      insight on where I can learn React?
      Thanks!`,
      answers: [
        {
          idAnswers: 0,
          idUser: 1,
          img: '../../../assets/img/proyect02/avatars/image-ramsesmiron.png',
          nombre:'ramsesmiron',
          time:"1 week ago",
          comment:`@maxblagun If you're still new, I'd
          recommend focusing on the
          fundamentals of HTML, CSS, and JS
          before considering React. It's very
          tempting to jump ahead but lay a solid
          foundation first.`,
        }
      ]
    },
  ]

  respuestas:any = [];

  miFormulario:any = new FormGroup({
    rtaComment: new FormControl('')
  });

  miFormulario2:any = new FormGroup({
    rtaCommentSend: new FormControl('')
  });

  openButtonReply(item:any){
   this.buttonReply = Number(item.id);
   console.log('el boton reply fue accionado con ID' + Number(item.id));
    
  }

  enviarFormularioReply(item:any) {
    // Estoy recibiendo el item al apretar el boton enviar para sacar la posicion de la iteracion
    // la convierto a numero a indexComentario y le resto 1 ya que las iteraciones de ngfor comienzan en 1 y no en 0
    let indexComentario = Number(item.id)-1;
    let rtaComment = this.miFormulario.get('rtaComment').value;

    // aqui se almacena el comentario de respuesta del formulario
    let respuesta = {
      rtaComment: rtaComment
    };

    let answers = this.comentarioUsuario[indexComentario].answers;
    let idAnswers = answers.length + 1;

    answers.push({
      idAnswers: idAnswers,
      idUser: 2,
      img: '',
      nombre: '',
      time: '2 months ago',
      comment: respuesta.rtaComment,
    });
    
    // log console
    this.respuestas.push(respuesta);
    console.log(respuesta);
    console.log(this.comentarioUsuario);
    
    this.miFormulario.reset();
    localStorage.setItem('respuestas', JSON.stringify(this.respuestas));
  }

  enviarFormularioSend() {
    let lastId = this.comentarioUsuario.length > 0 ? this.comentarioUsuario[this.comentarioUsuario.length - 1].id : 0;
    let rtaCommentSend = this.miFormulario2.get('rtaCommentSend').value;
    let respuesta = {
      rtaCommentSend: rtaCommentSend
    };

    this.comentarioUsuario.push({
      id: lastId + 1,
      img: '../../../assets/img/proyect02/avatars/image-juliusomo.png',
      nombre: 'johnsmith',
      time: '2 months ago',
      comment: respuesta.rtaCommentSend,
      answers: []
    });
    
    // log console
    this.respuestas.push(respuesta);
    console.log("Esto viene del formulario SEND " + respuesta);
    console.log("Esto viene del formulario SEND " + this.comentarioUsuario);
    
    this.miFormulario2.reset();
    localStorage.setItem('respuestas', JSON.stringify(this.respuestas));
  
  }

  eliminarRespuesta(idAnswers: number) {
    this.comentarioUsuario.forEach(c => {
      c.answers = c.answers.filter(respuesta => respuesta.idAnswers !== idAnswers);
    });
  }

  editarRespuesta(respuesta: any) {
    const index = this.respuestas.indexOf(respuesta);
    if (index !== -1) {
      const respuestaEditada = prompt('Editar respuesta', respuesta.rtaComment);
      if (respuestaEditada !== null) {
        this.respuestas[index].rtaComment = respuestaEditada;
        localStorage.setItem('respuestas', JSON.stringify(this.respuestas));
      }
    }
  }
}
