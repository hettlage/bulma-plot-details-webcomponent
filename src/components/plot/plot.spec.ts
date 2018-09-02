import { TestWindow } from '@stencil/core/testing';
import { Plot } from './plot';

describe('Plot', () => {
  it('should load', () => {
    expect(new Plot()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    let element: HTMLSaaoPlotElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Plot],
        html: `<saao-plot>
<div class="child-content"></div>
</saao-plot>`
                                })
    });

    it('should render a div with the correct class', () => {
      expect(element.querySelector('div.saao-plot')).toBeTruthy();
    });

    it('should render child content correctly', () => {
      const saaoPlotDetails = element.querySelector('div.saao-plot');
      expect(saaoPlotDetails.querySelector('.child-content')).toBeTruthy();
    })
  })
});
