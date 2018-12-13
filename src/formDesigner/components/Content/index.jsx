import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import BaseComponent from '../../../shared/components/BaseComponent';
import TargetBox from './TargetBox';
import { setActiveComponent, setLayoutTree, setDynamicSearchResult } from '../../actions';

import './index.less';

const { Content } = Layout;

class FormDesignerContent extends BaseComponent {
  render() {
    return (
      <Content className="form-designer__content">
        <TargetBox {...this.props} />
      </Content>
    );
  }
}

export default connect(
  state => ({
    activeComponent: state.formExtend.get('activeComponent'),
    childDragedComponent: state.formExtend.get('childDragedComponent'),
    layoutTree: state.formExtend.get('layoutTree').toJS(),
  }),
  {
    setActiveComponent,
    setLayoutTree,
    setDynamicSearchResult,
  }
)(FormDesignerContent);
