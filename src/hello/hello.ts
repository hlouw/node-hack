
export const reallyHandleHello = (name: string): string | Error => {  
  if (name.search(/[^A-Za-z]/) !== -1) {
    return new Error("Name can only contain alphabetic characters");
  }
  return `Hello ${name}`;
}