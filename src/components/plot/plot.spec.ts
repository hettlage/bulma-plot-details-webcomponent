import { TestWindow } from '@stencil/core/testing';
import { Plot, PLOT_INFO_OFFSET_FROM_CURSOR } from './plot';
import { PlotInfo } from '../plot-info/plot-info';
import { PlotModal } from '../plot-modal/plot-modal';

/**
 * A mouse event that can be dispatched in a unit test.
 *
 * The event type should be any of the standard JavaScript mouse events (such as "mouseover" or "mouseleave").
 *
 * @param {TestWindow} testWindow
 * @param {string} eventType
 * @returns {MouseEvent}
 */
function mouseEvent(testWindow: TestWindow, eventType: string) {
  return new (testWindow.window as any).MouseEvent(eventType, {
    bubbles: true,
    cancelable: true
  });
}

describe('Plot', () => {
  it('should load', () => {
    expect(new Plot()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    let element: HTMLSaltastroPlotElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Plot],
        html: `<saltastro-plot>
<div class="child-content"></div>
</saltastro-plot>`
                                })
    });

    it('should render child content', () => {
      expect(element.querySelector('.child-content')).toBeTruthy();
    })
  });

  it('should show the plot modal when the plot is clicked', async () => {
    const testWindow = new TestWindow();
    const element: HTMLElement = await testWindow.load({
      components: [Plot, PlotModal],
      html: `<saltastro-plot>
<div>some plot content</div>
<saltastro-plot-modal>
<div>some plot modal content</div>
</saltastro-plot-modal>
</saltastro-plot>`
    });

    // click to display the modal
    const plotModal = element.querySelector('saltastro-plot-modal');
    const show = jest.fn();
    Object.defineProperty(plotModal, 'show', {value: show});
    const plotDiv = element.querySelector('div');
    plotDiv.click();
    expect(show).toHaveBeenCalledTimes(1);
  });

  it('should not fail if there is no plot modal', async ()=> {
    const testWindow = new TestWindow();
    const element: HTMLElement = await testWindow.load({
                                                         components: [Plot],
                                                         html: '<saltastro-plot></saltastro-plot>'
                                                       });
    const plotDiv = element.querySelector('div');
    plotDiv.click();
  });

  it('should not fail if there is no plot info', async ()=> {
    const testWindow = new TestWindow();
    const element: HTMLElement = await testWindow.load({
                                                         components: [Plot],
                                                         html: '<saltastro-plot></saltastro-plot>'
                                                       });
    const plotDiv = element.querySelector('div');
    plotDiv.dispatchEvent(mouseEvent(testWindow, 'mouseover'));
    plotDiv.dispatchEvent(mouseEvent(testWindow, 'mousemove'));
    plotDiv.dispatchEvent(mouseEvent(testWindow, 'mouseleave'));
  });

  describe('plot info interaction', () => {
    let testWindow: TestWindow;
    let element: HTMLElement;
    let plotDiv: HTMLElement;
    let plotModal: HTMLElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Plot, PlotInfo],
        html: `<saltastro-plot>
<saltastro-plot-info>Info</saltastro-plot-info>
</saltastro-plot>`
                                });
      plotDiv = element.querySelector('div');
      plotModal = element.querySelector('saltastro-plot-info');
    });

    it('should show and move the plot info when the cursor is moved over the plot', () => {
      const show = jest.fn();
      const move = jest.fn();
      Object.defineProperty(plotModal, 'show', { value: show });
      Object.defineProperty(plotModal, 'move', { value: move });

      plotDiv.dispatchEvent(mouseEvent(testWindow, 'mousemove'));
      expect(show).toHaveBeenCalled();
      expect(move).toHaveBeenCalled();

      show.mockClear();
      move.mockClear();
      plotDiv.dispatchEvent(mouseEvent(testWindow, 'mousemove'));
      expect(show).toHaveBeenCalled();
      expect(move).toHaveBeenCalled();
    });

    it('should hide the plot when the mouse exits the plot', () => {
      const hide = jest.fn();
      Object.defineProperty(plotModal, 'hide', { value: hide });

      plotDiv.dispatchEvent(mouseEvent(testWindow, 'mouseleave'));
      expect(hide).toHaveBeenCalled();
    });

    it('should hide the plot info when the plot is clicked and there is a plot modal', () => {
      const hide = jest.fn();
      const plotInfo = element.querySelector('saltastro-plot-info');
      Object.defineProperty(plotInfo, 'hide', { value: hide });
      element.appendChild(testWindow.document.createElement('saltastro-plot-modal'));

      plotDiv.click();
      expect(hide).toHaveBeenCalled();
    });

    it('should not hide the plot info when the plot is clicked but there is no plot modal', () => {
      const hide = jest.fn();
      const plotInfo = element.querySelector('saltastro-plot-info');
      Object.defineProperty(plotInfo, 'hide', { value: hide });

      plotDiv.click();
      expect(hide).not.toHaveBeenCalled();
    })
  });


});
