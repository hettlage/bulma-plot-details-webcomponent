import { Component } from '@stencil/core';

@Component({
  tag: 'saao-plot-details',
  styleUrl: 'plot-details.css'
           })
export class PlotDetails {
  render() {
    return (
      <div class="saao-plot-details">
        <slot/>
      </div>
    );
  }
}
