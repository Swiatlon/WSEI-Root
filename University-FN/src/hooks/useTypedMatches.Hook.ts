import type React from 'react';
import { useMatches as originalUseMatches } from 'react-router-dom';
import type { RolesEnum } from 'contract/enums/Enums';

export interface IRouteHandle {
  navigation?: {
    text: string;
    icon: React.JSX.Element;
  };
  permissions?: {
    availableForRoles?: RolesEnum[];
  };
}

export interface ITypedUIMatch<Params = unknown, Data = unknown> {
  handle?: IRouteHandle;
  pathname: string;
  params: Params;
  data: Data;
}

export function useTypedMatches(): ITypedUIMatch[] {
  return originalUseMatches() as ITypedUIMatch[];
}
