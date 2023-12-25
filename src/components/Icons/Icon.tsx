import { getIconType } from '../../utilities';
import { applyDefaults } from '../../core/KitraProvider';
import type { FCCWD, IconComponentProps, IconType } from '../../types';

type IconProps = {
    type: IconType,
} & IconComponentProps;

const Icon:FCCWD<IconProps> = ({ type, ...props }) => {
  const IconComponent = getIconType(type || 'ionicons');

  return (
    <IconComponent {...props} />
  );
};

export default applyDefaults(Icon);
