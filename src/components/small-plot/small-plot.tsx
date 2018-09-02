import { Component } from '@stencil/core';


@Component({
  tag: 'saao-small-plot',
  styleUrl: 'small-plot.css'
           })
export class SmallPlot {
  render() {
    return (
      <div class="saao-small-plot">
        <slot/>
      </div>
    )
  }
}
