import { Component } from '@stencil/core';

@Component({
  tag: 'saao-plot',
  styleUrl: 'plot.css'
           })
export class Plot {
  render() {
    return (
      <div class="saao-plot">
        <slot/>
      </div>
    );
  }
}
