export interface ICustomer {
  id?: number;
  name?: string;
  password?: string;
}

export const defaultValue: Readonly<ICustomer> = {};
