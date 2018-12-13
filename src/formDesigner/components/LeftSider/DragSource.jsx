import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { Modal } from 'antd';
import BaseComponent from '../../../shared/components/BaseComponent';

const boxSource = {
  beginDrag(props) {
    return { ...props.menu };
  },

  endDrag(props) {
    console.log('放置到目标区域');
  },
};

class SourceItem extends BaseComponent {
  static propTypes = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    showCopyIcon: PropTypes.bool,
    menu: PropTypes.object.isRequired,
  };

  static defaultProps = {
    showCopyIcon: true,
  };

  render() {
    const { isDragging, connectDragSource, showCopyIcon, menu } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    const dropEffect = showCopyIcon ? 'copy' : 'move';

    return connectDragSource(
      <li className="drag-item" data-type={menu.type} data-id={menu.id} style={{ opacity }}>
        {menu.name}
      </li>,
      {
        dropEffect,
      }
    );
  }
}

export default DragSource(props => props.dragType, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(SourceItem);
