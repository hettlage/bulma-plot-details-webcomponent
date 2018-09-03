import { TestWindow } from '@stencil/core/testing';
import { Plot } from './plot';

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

    it('should render a div with the correct class', () => {
      expect(element.querySelector('div.saltastro-plot')).toBeTruthy();
    });

    it('should render child content correctly', () => {
      const plotDetails = element.querySelector('div.saltastro-plot');
      expect(plotDetails.querySelector('.child-content')).toBeTruthy();
    })
  })
});
