/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable radix */
import {continueStatement} from '@babel/types';
import React, {PureComponent} from 'react';
import Canvas from 'react-native-canvas';
interface props {}
interface IState {}
class VerificationCode extends PureComponent<props, IState> {
  // const = React.createRef<>()
  completeToDraw = canvas => {
    const ctx = canvas.getContext('2d');
    //     ctx.fillStyle = 'purple';
    //     ctx.fillRect(0, 0, 97, 35);
    this.drawBackgroundImage(ctx);
  };
  drawBackgroundImage = ctx => {
    ctx.fillStyle = this.randomColor(220, 230);
    //画矩形
    ctx.fillRect(0, 0, 97, 35);
    //生成随机数 和背景图片
    let letter: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let text: string = '';
    for (let i = 0; i < 4; i++) {
      text += letter[this.randomNumber(0, letter.length)];
    }
    ctx.textBaseline = 'middle';
    ctx.font = 24 + 'px Simhei';
    ctx.save();
    ctx.translate(30 * this.randomNumber(0, 4) + 15, 15);
    ctx.rotate((this.randomNumber(-30, 30) * Math.PI) / 180);
    console.log(text);
    ctx.fillText(text, 5, 7);
    ctx.restore();
    this.generateLine(ctx);
    this.generateDot(ctx);
  };
  //产生随机数
  randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * max - min + min);
  };
  //随机颜色
  randomColor = (min, max) => {
    let r = this.randomNumber(min, max);
    let g = this.randomNumber(min, max);
    let b = this.randomNumber(min, max);
    return `rgb(${r},${g},${b})`;
  };
  //生成线条
  generateLine = ctx => {
    for (let i = 0; i < 5; i++) {
      ctx.beginPath(); // 开始画路径
      ctx.moveTo(this.randomNumber(0, 97), this.randomNumber(0, 35)); //起点
      ctx.lineTo(this.randomNumber(0, 97), this.randomNumber(0, 35)); //终点
      ctx.strokeStyle = this.randomColor(180, 230); // 画线的样式
      ctx.closePath(); // 关闭路径
      ctx.stroke(); // 执行绘制
    }
  };
  //生成点
  generateDot = ctx => {
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.arc(
        this.randomNumber(0, 97),
        this.randomNumber(0, 35),
        1,
        0,
        2 * Math.PI,
      );
      ctx.closePath();
      ctx.fillStyle = this.randomColor(150, 200);
      ctx.fill();
    }
  };
  render() {
    return <Canvas ref={this.completeToDraw} />;
  }
}

export default VerificationCode;
