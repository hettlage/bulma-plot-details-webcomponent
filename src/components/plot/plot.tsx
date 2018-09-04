import { Component, Element } from '@stencil/core';

@Component({
  tag: 'saltastro-plot',
  styleUrl: 'plot.css'
           })
export class Plot {
  @Element() private element: HTMLSaltastroPlotElement;

  onClick = () => {
    // hide plot info (if need be)
    const plotModals = Array.from(this.element.querySelectorAll('saltastro-plot-modal'));

    const plotInfos = Array.from(this.element.querySelectorAll('saltastro-plot-info'));
    if (plotModals.length > 0) {
      plotInfos.forEach((info) => info.hide());
    }

    // show modal
    plotModals.forEach((modal) => modal.show());
  };

  onMouseMove = (e: MouseEvent) => {
    Array.from(this.element.querySelectorAll('saltastro-plot-info'))
      .forEach((info) => {
        info.move(e.clientX + PLOT_INFO_OFFSET_FROM_CURSOR.x, e.clientY + PLOT_INFO_OFFSET_FROM_CURSOR.y);
        info.show();
      })
  };

  onMouseLeave = () => {
    Array.from(this.element.querySelectorAll('saltastro-plot-info'))
      .forEach((info) => {
        info.hide();
      });
  };

  render() {
    return (
      <div onClick={this.onClick} onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>
        <slot/>
      </div>
    );
  }
}

export const PLOT_INFO_OFFSET_FROM_CURSOR = { x: 10, y: 10 };
