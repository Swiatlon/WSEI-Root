import type { ITeacher } from 'contract/interfaces/persons/Persons';
import type { IQueryParams } from 'contract/interfaces/requests/Requests';

export interface IGetAllTeachersResponse {
  items: ITeacher[];
  count?: number;
}

export interface ICommunityPagination {
  page: number;
  pageSize: number;
}

export interface IGetAllTeachersQueryParams extends IQueryParams {}

export interface IGetAllEventOrganizersResponse {
  organizerId: number;
  organizerType: string;
  name: string;
  surname?: string;
}

export interface ITransformedGetAllEventOrganizersResponse {
  organizerId: number;
  organizerType: string;
  name: string;
}
