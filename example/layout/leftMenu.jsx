import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

export default class LeftMenu extends PureComponent {
  static propTypes = {
    onCollapseChange: PropTypes.func.isRequired,
    collapse: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <aside className="layout-sider">
        <div className="layout-logo" />
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['laptop']}>
          <Menu.Item key="formDesigner">
            <Icon type="laptop" />
            <Link to="/form-designer">表单设计</Link>
          </Menu.Item>

          <Menu.Item key="formViewer">
            <Icon type="laptop" />
            <Link to="/form-viewer">表单查看</Link>
          </Menu.Item>
        </Menu>
        <button className="ant-aside-action" onClick={this.props.onCollapseChange}>
          {this.props.collapse ? <Icon type="right" /> : <Icon type="left" />}
        </button>
      </aside>
    );
  }
}
