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

    it('should render child content', () => {
      expect(element.querySelector('.child-content')).toBeTruthy();
    })
  })
});
