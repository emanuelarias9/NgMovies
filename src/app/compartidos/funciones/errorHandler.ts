export function errorHandler(obj: any): string[] {
  const err = obj.error.errors;
  let errorMesages: string[] = [];

  for (let key in err) {
    let field = key;
    const messages = err[key].map((message: string) => `${field}: ${message}`);
    errorMesages = errorMesages.concat(messages);
  }

  return errorMesages;
}
