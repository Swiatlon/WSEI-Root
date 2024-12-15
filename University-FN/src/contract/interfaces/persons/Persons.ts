import { GenderEnum } from 'contract/enums/Enums';
import type { IDegreeCourse, IDegreePath, IModule } from 'contract/interfaces/academics/Academics';

export interface IAddress {
  id: string;
  country: string;
  city: string;
  postalCode: string;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
}

export interface IConsent {
  id: number;
  permissionForPhoto: boolean;
  permissionForDataProcessing: boolean;
}

export interface IPerson {
  id: string;
  name: string;
  surname: string;
  pesel: string;
  gender: GenderEnum;
  dateOfBirth: Date;
  nationality: string;
  contactEmail: string;
  contactPhone: string;
  dateOfAdmission: Date;
}

export interface IStudent extends IPerson {
  address: IAddress;
  consent: IConsent;
  degreeCourses: IDegreeCourse[];
  degreePaths: IDegreePath[];
  modules: IModule[];
}

export interface ITeacher {
  id: number;
  contactEmail: string;
  contactPhone: string;
  name: string;
  surname: string;
}

export interface IStudentTodo {
  id: number;
  title: string;
  description: string;
  endDate: Date;
  color: string;
  student: number;
}
