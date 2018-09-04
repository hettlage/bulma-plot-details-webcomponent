import { Component, Element } from '@stencil/core';

@Component({
  tag: 'saltastro-plot',
  styleUrl: 'plot.css'
           })
export class Plot {
  @Element() private element: HTMLSaltastroPlotElement;

  showModal = () => {
    Array.from(this.element.querySelectorAll('saltastro-plot-modal'))
      .forEach((modal) => modal.show());
  };

  render() {
    return (
      <div  onClick={this.showModal}>
        <slot/>
      </div>
    );
  }
}
