import { TestWindow } from '@stencil/core/testing';
import { Plot } from './plot';
import { PlotModal } from '../plot-modal/plot-modal';

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
    const toggle = jest.fn();
    Object.defineProperty(plotModal, 'toggle', {value: toggle});
    const plotDiv = element.querySelector('div');
    plotDiv.click();
    expect(toggle).toHaveBeenCalledTimes(1);
  });

  it('should not fail if there is no plot modal', async ()=> {
    const testWindow = new TestWindow();
    const element: HTMLElement = await testWindow.load({
      components: [Plot],
      html: '<saltastro-plot></saltastro-plot>'
                                                       });
    const plotDiv = element.querySelector('div');
    plotDiv.click();
  })
});
