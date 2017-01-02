export interface User {
  name: string;
  dob: Date;
  email: string;
};

export const saveUser = (data: User): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (data.email === "ed.conolly@ovoenergy.com") {
      reject("that email sucks");
    } else {
      resolve(data);
    }
  });
};
