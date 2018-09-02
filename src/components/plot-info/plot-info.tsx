import { Component } from '@stencil/core';


@Component({
  tag: 'saao-plot-info',
  styleUrl: 'plot-info.css'
           })
export class PlotInfo {
  render() {
    return (
      <div class="saao-plot-info">
        <slot/>
      </div>
    );
  }
}
