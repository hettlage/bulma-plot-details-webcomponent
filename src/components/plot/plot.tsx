import { Component } from '@stencil/core';

@Component({
  tag: 'saltastro-plot',
  styleUrl: 'plot.css'
           })
export class Plot {
  render() {
    return (
        <slot/>
    );
  }
}
