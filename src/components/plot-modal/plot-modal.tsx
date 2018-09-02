import { Component } from '@stencil/core';


@Component({
  tag: 'saao-plot-modal',
  styleUrl: 'plot-modal.css'
           })
export class PlotModal {
  render() {
    return (
      <div class="saao-plot modal">
        <div class="modal-background"/>
        <div class="modal-content">
          <slot/>
        </div>
        <button class="modal-close is-large" aria-label="close"/>
      </div>    );
  }
}
