
export const generateHello = (name: string): Welcome | Error => {  
  if (name.search(/[^A-Za-z]/) !== -1) {
    return new Error("Name can only contain alphabetic characters");
  }
  return {
    message: `hello ${name}` 
  };
}

export interface Welcome {
  message: string
}