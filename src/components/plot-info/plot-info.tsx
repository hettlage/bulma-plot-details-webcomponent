import { Component, Method } from '@stencil/core';


@Component({
  tag: 'saltastro-plot-info',
  styleUrl: 'plot-info.css'
           })
export class PlotInfo {
  plotInfo: HTMLElement;

  render() {
    return (
      <div class="saltastro-plot-info is-invisible" ref={(el) => this.plotInfo = el}>
        <slot/>
      </div>
    );
  }

  @Method() toggle() {
    this.plotInfo.classList.toggle('is-invisible');
  }
}
