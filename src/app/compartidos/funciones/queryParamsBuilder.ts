import { HttpParams } from '@angular/common/http';

export function QueryParamsBuilder(obj: any): HttpParams {
  let params = new HttpParams();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            params = params.append(key, item);
          });
        } else {
          params = params.append(key, value.toString());
        }
      }
    }
  }
  return params;
}
