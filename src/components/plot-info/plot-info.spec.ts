import { TestWindow } from '@stencil/core/testing';
import { PlotInfo } from './plot-info';


describe('PlotInfo', () => {
  it('should load', () => {
    expect(new PlotInfo()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    let element: HTMLSaaoPlotInfoElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PlotInfo],
        html: `<saao-plot-info>
<div class="child-content"></div>
</saao-plot-info>`
                                      })
    });

    it('should render a div with the correct class', () => {
      expect(element.querySelector('div.saao-plot-info')).toBeTruthy();
    });

    it('should render child content correctly', () => {
      const plotInfo = element.querySelector('.saao-plot-info');
      expect(plotInfo.querySelector('.child-content')).toBeTruthy();
    })
  });

  describe('toggle', () => {
    it('should toggle the is-invisible class', async () => {
      const testWindow = new TestWindow();
      const element = await testWindow.load({
        components: [PlotInfo],
        html: '<saao-plot-info></saao-plot-info>'
                                            });

      // by default the plot info is invisible
      expect(element.querySelector('.saao-plot-info.is-invisible')).toBeTruthy();

      // toggle the visibility on
      element.toggle();
      expect(element.querySelector('.saao-plot-info.is-invisible')).not.toBeTruthy();

      // toggle the visibility off again
      element.toggle();
      expect(element.querySelector('.saao-plot-info.is-invisible')).toBeTruthy();
    })
  })
});
