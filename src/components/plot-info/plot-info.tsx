import { Component, Element, Method } from '@stencil/core';


@Component({
  tag: 'saltastro-plot-info',
  styleUrl: 'plot-info.css'
           })
export class PlotInfo {
  @Element() private element: HTMLSaltastroPlotInfoElement;

  componentDidLoad() {
    this.element.classList.add('is-invisible');
  }

  render() {
    return (
      <slot/>
    );
  }

  @Method() toggle() {
    this.element.classList.toggle('is-invisible');
  }

  @Method() move(x: number, y: number) {
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
  }
}
