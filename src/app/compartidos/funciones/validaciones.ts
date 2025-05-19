import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function primeraLetraMayuscula() {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = <string>control.value;
    if (!valor) return null;
    if (valor.length === 0) return null;

    const primeraLetra = valor[0];
    if (primeraLetra !== primeraLetra.toUpperCase()) {
      return {
        primeraLetraMayuscula: {
          mensaje: 'la primera letra debe ser mayuscula',
        },
      };
    }
    return null;
  };
}

export function fechaNoPuedeSerFutura(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fechaEscogida = new Date(control.value);
    const fechaActual = new Date();
    if (fechaEscogida > fechaActual) {
      return {
        futuro: {
          mensaje: 'la fecha no puede ser futura',
        },
      };
    }
    return null;
  };
}
