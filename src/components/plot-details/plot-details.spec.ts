import { TestWindow } from '@stencil/core/testing';
import { PlotDetails } from './plot-details';

describe('PlotDetails', () => {
  it('should load', () => {
    expect(new PlotDetails()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    let element: HTMLSaaoPlotDetailsElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PlotDetails],
        html: `<saao-plot-details></saao-plot-details>`
                                })
    });

    it('should render a div with the correct class', () => {
      expect(element.querySelector('div.saao-plot-details')).toBeTruthy();
    });
  })
});

