import React from 'react';
import ReactDom from 'react-dom';

class CodeDemo extends React.Component {
  static contextTypes = {
    className: React.PropTypes.string,
    pageData: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'code',
  };

  constructor() {
    super(...arguments);
    this.components = this.props.pageData.components;
    this.state = {
      code: this.props.utils
        .toReactComponent(this.components['queue-anim'].demo.simple.highlightedCode),
      component: this.components['queue-anim'].demo.simple.preview(React, ReactDom)
    };
  }

  componentDidMount() {
    // 动画再做；
  }

  render() {
    return <div className={this.props.className}>
      <div className={`${this.props.className}-top`}>
        <i />
        <i />
        <i />
      </div>
      <div className={`${this.props.className}-left`}>
        {this.state.code}
        <div className={`${this.props.className}-left-bar`}>
          <div className={`${this.props.className}-left-bar-logo`}>
            <img height="15" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" />
            <img height="8" src="https://zos.alipayobjects.com/rmsportal/glnFNVQMvQinmUr.svg" />
          </div>
        </div>
      </div>
      <div className={`${this.props.className}-right`}>
        {this.state.component}
      </div>
    </div>;
  }
}

export default CodeDemo;

