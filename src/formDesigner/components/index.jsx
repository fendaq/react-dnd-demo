import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Layout } from 'antd';
import BaseComponent from '../../shared/components/BaseComponent';
import FormDesignerLeftSider from './LeftSider';
import FormDesignerContent from './Content';

import './index.less';

/**
 * 把 ...this.props 换成最少需要的明确的props
 */

class FormDesigner extends BaseComponent {
  render() {
    return (
      <Layout className="form-designer">
        <Layout className="form-designer__main">
          <FormDesignerLeftSider {...this.props} />

          <FormDesignerContent {...this.props} />
        </Layout>
      </Layout>
    );
  }
}

export default DragDropContext(HTML5Backend)(FormDesigner);
