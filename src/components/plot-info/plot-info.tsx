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

  @Method() show() {
    this.element.classList.remove('is-invisible');
  }

  @Method() hide() {
    this.element.classList.add('is-invisible');
  }

  /**
   * Move the the plot info element to a given position.
   *
   * @param {number} x
   * @param {number} y
   */
  @Method() move(x: number, y: number) {
    this.element.style.left = `${x}px`;
    this.element.style.top = `${y}px`;
  }
}
