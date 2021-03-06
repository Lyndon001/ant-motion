import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

import { Link } from 'react-router';

export default class Page3 extends React.Component {
  static contextTypes = {
    pageData: React.PropTypes.object,
    utils: React.PropTypes.object,
    tweenAnim: React.PropTypes.object,
  };

  static defaultProps = {
    pageData: {},
    utils: {},
    tweenAnim: {},
  };

  constructor() {
    super(...arguments);
  }

  render() {
    const exhibition = this.props.pageData.exhibition.demo;
    let demoToChildren = Object.keys(exhibition)
      .map(key => exhibition[key])
      .sort((a, b) => a.meta.order - b.meta.order)
      .filter((key, i) => i < 6).map(item => {
        const img = item.meta.image;
        const link = item.meta.filename.replace(/(\/index)|(.md)/g, '');
        const title = item.meta.chinese || item.meta.english;
        const content = this.props.utils.toReactComponent(item.description);
        return <li key={link}>
          <Link to={link}>
            <div className="home-anim-demo-img"><img src={img} width="100%" /></div>
            <h2>{title}</h2>
            <div className="home-anim-demo-text">{content}</div>
          </Link>
        </li>
      });

    return (<OverPack
      className="home-content page3"
      hideProps={{ img: { reverse: true }, a: { reverse: true } }}
      playScale={0.8}
      scrollName="page3"
    >
      <QueueAnim
        className="page-text"
        key="text"
        type="bottom"
        leaveReverse
        delay={[0, 100]}
      >
        <h1 key="h1">使用我们的动效</h1>
        <p key="p">
          我们提供一些以 Ant Motion 组件为基础的动画效果代码片段，你可以直接复制使用或作参考。
        </p>
      </QueueAnim>
      <TweenOne
        animation={{ delay: 200, ...this.props.tweenAnim }}
        key="img"
        className="home-anim-demo"
      >
        <ul>
          {demoToChildren}
        </ul>
      </TweenOne>
      <TweenOne
        key="a"
        animation={{ delay: 300, ...this.props.tweenAnim }}
        className="home-button"
      >
        <Link to="/exhibition/">更多动画</Link>
      </TweenOne>
    </OverPack>);
  }
}
