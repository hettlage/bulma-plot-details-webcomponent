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
      <div class="saltastro-plot-info">
        <slot/>
      </div>
    );
  }

  @Method() toggle() {
    this.element.classList.toggle('is-invisible');
  }
}
