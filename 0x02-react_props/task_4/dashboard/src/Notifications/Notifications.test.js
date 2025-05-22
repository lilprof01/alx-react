import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('displays div.menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('displays div.menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('displays div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });

  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the right html for the first NotificationItem', () => {
    const firstItem = shallow(<NotificationItem />).first();
    expect(firstItem.html()).toContain('<li></li>');
  });
});
