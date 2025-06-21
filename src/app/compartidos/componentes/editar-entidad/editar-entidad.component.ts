import {
  AfterViewInit,
  Component,
  inject,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { errorHandler } from '../../funciones/errorHandler';
import { ICrudService } from '../../interfaces/ICrudService';
import { ServicioCrudToken } from '../../proveedores/proveedores';
import { ErrorHandlerComponent } from '../../errores/error-handler/error-handler.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-editar-entidad',
  imports: [ErrorHandlerComponent, LoadingComponent],
  templateUrl: './editar-entidad.component.html',
  styleUrl: './editar-entidad.component.css',
})
export class EditarEntidadComponent<TDTO, TCrearDTO> implements OnInit {
  ngOnInit(): void {
    this.servicioCRUD.Obtener(parseInt(this.id)).subscribe((entidad) => {
      this.LoadComponent(entidad);
    });
  }

  LoadComponent(entidad: any) {
    if (this.contenedorFormulario) {
      this.componentRef = this.contenedorFormulario.createComponent(this.form);
      this.componentRef.instance.model = entidad;
      this.componentRef.instance.postForm.subscribe((entidad: TCrearDTO) => {
        this.guardarCambios(entidad);
      });
      this.loading = false;
    }
  }

  @Input() id!: string;
  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) rutaIndice!: string;
  @Input({ required: true }) form: any;
  errorMessages: string[] = [];
  servicioCRUD = inject(ServicioCrudToken) as ICrudService<TDTO, TCrearDTO>;
  router = inject(Router);

  loading = true;

  @ViewChild('contenedorFormulario', { read: ViewContainerRef })
  contenedorFormulario!: ViewContainerRef;

  private componentRef!: any;

  guardarCambios(entidad: TCrearDTO) {
    this.servicioCRUD.Actualizar(parseInt(this.id), entidad).subscribe({
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
