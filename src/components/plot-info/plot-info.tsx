import { Component, Method } from '@stencil/core';


@Component({
  tag: 'saao-plot-info',
  styleUrl: 'plot-info.css'
           })
export class PlotInfo {
  plotInfo: HTMLElement;

  render() {
    return (
      <div class="saao-plot-info is-invisible" ref={(el) => this.plotInfo = el}>
        <slot/>
      </div>
    );
  }

  @Method() toggle() {
    this.plotInfo.classList.toggle('is-invisible');
  }
}
