import { TestWindow } from '@stencil/core/testing';
import {SmallPlot} from "./small-plot";

describe('SmallPlot', () => {
  it('should load', () => {
    expect(new SmallPlot()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    let element: HTMLSaaoSmallPlotElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SmallPlot],
        html: `<saao-small-plot>
<div class="child-content"></div>
</saao-small-plot>`
                                });
    });

    it('should render a div with the correct class', () => {
      expect(element.querySelector('div.saao-small-plot')).toBeTruthy();
    });

    it('should render child content correctly', () => {
      const smallPlot = element.querySelector('.saao-small-plot');
      expect(smallPlot.querySelector('.child-content')).toBeTruthy();
    })
  })
});

