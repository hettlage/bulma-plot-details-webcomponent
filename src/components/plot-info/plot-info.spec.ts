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
  })
});
