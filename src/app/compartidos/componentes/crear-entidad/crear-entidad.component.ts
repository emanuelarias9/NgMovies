import {
  AfterViewInit,
  Component,
  inject,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ICrudService } from '../../interfaces/ICrudService';
import { ServicioCrudToken } from '../../proveedores/proveedores';
import { Router } from '@angular/router';
import { errorHandler } from '../../funciones/errorHandler';
import { ErrorHandlerComponent } from '../../errores/error-handler/error-handler.component';

@Component({
  selector: 'app-crear-entidad',
  imports: [ErrorHandlerComponent],
  templateUrl: './crear-entidad.component.html',
  styleUrl: './crear-entidad.component.css',
})
export class CrearEntidadComponent<TDTO, TCrearDTO> implements AfterViewInit {
  ngAfterViewInit(): void {
    this.componentRef = this.contenedorFormulario.createComponent(this.form);
    this.componentRef.instance.postForm.subscribe((entidad: TCrearDTO) => {
      this.guardarCambios(entidad);
    });
  }
  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) rutaIndice!: string;
  @Input({ required: true }) form: any;
  errorMessages: string[] = [];
  servicioCRUD = inject(ServicioCrudToken) as ICrudService<TDTO, TCrearDTO>;
  router = inject(Router);

  @ViewChild('contenedorFormulario', { read: ViewContainerRef })
  contenedorFormulario!: ViewContainerRef;

  private componentRef!: any;

  guardarCambios(entidad: TCrearDTO) {
    this.servicioCRUD.Crear(entidad).subscribe({
      next: () => {
        this.router.navigate([this.rutaIndice]);
      },
      error: (err) => {
        const errors = errorHandler(err);
        this.errorMessages = errors;
      },
    });
  }
}
