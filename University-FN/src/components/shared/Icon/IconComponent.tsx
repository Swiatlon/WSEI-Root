import { ComponentType, ReactElement } from 'react';
import * as Icons from '@mui/icons-material';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export type MuiIconsNameType = keyof typeof Icons;

interface IIconComponentProps extends SvgIconProps {
  name: MuiIconsNameType;
}

const iconComponents: Record<MuiIconsNameType, ComponentType<SvgIconProps>> = Icons;

export function IconComponent({ name, ...props }: IIconComponentProps): ReactElement {
  const SpecificIcon = iconComponents[name];

  return <SpecificIcon {...props} />;
}
