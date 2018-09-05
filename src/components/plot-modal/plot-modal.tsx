import { Component, Element, Method } from '@stencil/core';


@Component({
  tag: 'saltastro-plot-modal',
  styleUrl: 'plot-modal.css'
           })
export class PlotModal {
  @Element() element: HTMLSaltastroPlotModalElement;

  modal: HTMLElement;

  onClick = (e: MouseEvent) => {
    if (e) e.stopPropagation();

    // we call the hide method on the element (rather than this object), so that we can mock it in unit tests
    this.element.hide();
  };

  onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      // we call the hide method on the element (rather than this object), so that we can mock it in unit tests
      this.element.hide();
    }
  };

  render() {
    return (
      <div class="modal" ref={(el) => this.modal = el}>
        <div class="modal-background"/>
        <div class="modal-content">
          <slot/>
        </div>
        <button class="modal-close is-large" aria-label="close" onClick={this.onClick}/>
      </div>
    );
  }

  @Method() show() {
    window.addEventListener('keydown', this.onKeyDown);

    this.modal.classList.add('is-active');
  }

  @Method() hide() {
    window.removeEventListener('keydown', this.onKeyDown);

    this.modal.classList.remove('is-active');
  }

  @Method() isVisible() {
    return this.modal.classList.contains('is-active');
  }
}
