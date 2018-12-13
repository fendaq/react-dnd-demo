/**
 * 表单设计器的数据展示组件，仅仅是展示，不涉及数据交互；
 */

import React from 'react';
import BaseComponent from '../shared/components/BaseComponent';
import createFormData from '../shared/utils/createFormData';
import WrappedForm from './WrappedForm';
import { wrapperData } from './data.js';
import './index.less';

class FormViewer extends BaseComponent {
  state = {
    formExtend: [],
  };

  componentDidMount() {
    console.log(wrapperData);
    const { formExtend } = createFormData(wrapperData.data.formPropertyVO);

    this.setState({
      formExtend,
    });
  }

  render() {
    const { formData = {} } = this.props;
    const { formExtend } = this.state;

    return (
      <div className="form-viewer">
        <WrappedForm formExtend={formExtend} formData={formData} {...this.props} />
      </div>
    );
  }
}

export default FormViewer;
