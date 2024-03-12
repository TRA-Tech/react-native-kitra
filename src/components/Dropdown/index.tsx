import type { DrowdownRouteProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import MultipleDropdown from './MultipleSelectDropdown';

import { default as ClassicDropdown } from './Dropdown';

const Dropdown:FCCWD<DrowdownRouteProps> = props => {
  const { multiple } = props;
  Dropdown.displayName = multiple ? 'MultipleDropdown' : 'Dropdown';

  if (multiple) { return (<MultipleDropdown {...props} />); }
  return <ClassicDropdown {...props} />;
};
export default applyDefaults(Dropdown);
