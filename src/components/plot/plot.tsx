import { Component, Element } from '@stencil/core';

@Component({
  tag: 'saltastro-plot',
  styleUrl: 'plot.css'
           })
export class Plot {
  @Element() private element: HTMLSaltastroPlotElement;

  toggleModal = () => {
    Array.from(this.element.querySelectorAll('saltastro-plot-modal'))
      .forEach((modal) => modal.toggle());
  };

  render() {
    return (
      <div onClick={this.toggleModal}>
        <slot/>
      </div>
    );
  }
}
