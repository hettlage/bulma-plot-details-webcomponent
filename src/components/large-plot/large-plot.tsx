import { Component } from '@stencil/core';


@Component({
  tag: 'saao-large-plot',
  styleUrl: 'large-plot.css'
           })
export class LargePlot {
  render() {
    return (
      <div class="saao-large-plot modal">
        <div class="modal-background"/>
        <div class="modal-content">
          <slot/>
        </div>
        <button class="modal-close is-large" aria-label="close"/>
      </div>    );
  }
}
