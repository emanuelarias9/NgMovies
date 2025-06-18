import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { CrearGeneroDTO, GeneroDTO } from '../genero';
import { GenerosService } from '../generos.service';
import { LoadingComponent } from '../../compartidos/componentes/loading/loading.component';
import { Router } from '@angular/router';
import { errorHandler } from '../../compartidos/funciones/errorHandler';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGeneroComponent, LoadingComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css',
})
export class EditarGeneroComponent implements OnInit {
  ngOnInit(): void {
    this.generoService.Obtener(this.id).subscribe((genero) => {
      this.genero = genero;
    });
  }

  generoService = inject(GenerosService);
  router = inject(Router);

  @Input({ transform: numberAttribute })
  id!: number;

  errores: string[] = [];

  genero?: GeneroDTO;

  guardarCambios(genero: CrearGeneroDTO) {
    this.generoService.Actualizar(this.id, genero).subscribe({
      next: () => {
        this.router.navigate(['/generos']);
      },
      error: (err) => {
        const errores = errorHandler(err);
        this.errores = errores;
      },
    });
  }
}
