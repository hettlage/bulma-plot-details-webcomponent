import { Component, Method } from '@stencil/core';


@Component({
  tag: 'saltastro-plot-modal',
  styleUrl: 'plot-modal.css'
           })
export class PlotModal {
  modal: HTMLElement;

  render() {
    return (
      <div class="modal" ref={(el) => this.modal = el}>
        <div class="modal-background"/>
        <div class="modal-content">
          <slot/>
        </div>
        <button class="modal-close is-large" aria-label="close"/>
      </div>
    );
  }

  @Method() toggle() {
    this.modal.classList.toggle('is-active');
  }
}
