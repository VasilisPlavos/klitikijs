export class klitikijs {
  
  // TODO: make this list separate file
  // TODO: make this list csv that generate a json automatically
  lastNameExceptions: string[] = ['καμένος', 'δευτεραίος', 'γεώργιος', 'νικόλαος'];

  format(lastName: string): string | null {
    let value = lastName.toLocaleLowerCase().trim();

    if (value.endsWith('ός')) {
      return nameWithE(lastName);
    }

    if (value.endsWith('ος')) {
      if (this.lastNameExceptions.includes(value)) {
        return nameWithE(lastName);
      }
    }

    return lastName.substring(0, lastName.length - 1);
  }
}

function nameWithE(lastName: string): string | null {
  var value = lastName.substring(0, lastName.length - 2);
  if (lastName.endsWith('ός')) return `${value}έ`;
  return `${value}ε`;
}
