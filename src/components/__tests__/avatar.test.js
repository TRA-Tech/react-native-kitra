import { render } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Avatar from '../Avatar/Avatar';
import AvatarGroup from '../Avatar/AvatarGroup';
import Icon from '../Icons/Icon';
/* eslint-disable no-undef */
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Avatar', () => {
  describe('renders badge with different sizes', () => {
    it('renders badge with small sizes and label prop', () => {
      const tree = renderWithContext(<Avatar badgePosition="top" label="Test" size="small" borderStyle="rounded" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with small sizes  and source prop', () => {
      const tree = renderWithContext(<Avatar badgePosition="top" source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }} size="small" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with medium sizes and label prop', () => {
      const tree = renderWithContext(<Avatar badgePosition="bottom" label="Test" size="medium" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with medium sizes and source prop', () => {
      const tree = renderWithContext(<Avatar badgePosition="top" source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }} size="medium" borderStyle="circular" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('render with avatarIcon prop', () => {
    const tree = renderWithContext(<Avatar badgePosition="top" avatarIcon={<Icon name="check" size={20} type="ant-design" />} label="Test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders badge with label', () => {
    const tree = renderWithContext(<Avatar badgePosition="bottom" label="Test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders badge with source prop', () => {
    const tree = renderWithContext(<Avatar badgePosition="bottom" source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders badge with source prop', () => {
    const tree = renderWithContext(<Avatar badgePosition="bottom" source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders badge with badgecontent prop', () => {
    const tree = renderWithContext(<Avatar badgePosition="top" label="Test" badgeContent={<Icon name="check" type="ant-design" size={15} />} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renders badge with different badge position', () => {
    it('renders badge with bottom position', () => {
      const tree = renderWithContext(<Avatar label="Test" badgePosition="bottom" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with top position', () => {
      const tree = renderWithContext(<Avatar label="Test" badgePosition="top" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('renders badge with different border style', () => {
    it('renders badge with circular border', () => {
      const tree = renderWithContext(<Avatar badgePosition="bottom" label="Test" borderStyle="circular" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with rounded border', () => {
      const tree = renderWithContext(<Avatar badgePosition="top" label="Test" borderStyle="rounded" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('render avatargroup avatarsType<limit', () => {
    const tree = renderWithContext(<AvatarGroup
      avatarsType={[
        { borderStyle: 'circular', avatarIcon: <Icon name="check" size={20} type="ant-design" />, badgeContent: <Icon name="check" type="ant-design" size={15} />, badgePosition: 'top', label: 'Test', size: 'medium' },
        { borderStyle: 'rounded', avatarIcon: <Icon name="check" size={20} type="ant-design" />, badgeContent: <Icon name="check" type="ant-design" size={15} />, badgePosition: 'bottom', source: { uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }, size: 'medium' },
        { badgePosition: 'top', label: 'Test', size: 'medium' },
        { badgePosition: 'bottom', source: { uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }, size: 'small' },
      ]}

    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('render avatargroup limit avatarsType>limit', () => {
    const tree = renderWithContext(<AvatarGroup
      avatarsType={[
        { badgePosition: 'bottom', label: 'Test', size: 'small' },
        { badgePosition: 'top', borderStyle: 'circular', source: { uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }, size: 'medium' },
        { borderStyle: 'rounded', avatarIcon: <Icon name="check" size={20} type="ant-design" />, badgeContent: <Icon name="check" type="ant-design" size={15} />, badgePosition: 'bottom', source: { uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }, size: 'medium' },
      ]}
      avatarLimit={1}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('render avatargroup avatarsType length is 0', () => {
    const tree = renderWithContext(<AvatarGroup
      avatarsType={[
      ]}
      avatarLimit={1}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
