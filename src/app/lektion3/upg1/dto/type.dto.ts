export interface User {
    id: number;
    name: string;
    email: string;
}

export interface AuthenticatedUser extends User {
    authToken: string;
}

export type Vehicle = {
    make: string;
    model: string;
    year: number;
}

export type ID = string | number;

  
  
  