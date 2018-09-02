import { TestWindow } from '@stencil/core/testing';
import { LargePlot } from './large-plot';


describe('LargePlot', () => {
  it('should load', () => {
    expect(new LargePlot()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    let element: HTMLSaaoLargePlotElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LargePlot],
        html: `<saao-large-plot>
<div class="child-content"></div>
</saao-large-plot>`
                                });
    });

    it('should render elements with the correct classes', () => {
      const modal = element.querySelector('div.saao-large-plot.modal');
      expect(modal).toBeTruthy();
      expect(modal.querySelector('div.modal-background')).toBeTruthy();
      expect(modal.querySelector('div.modal-content')).toBeTruthy();
      expect(modal.querySelector('button.modal-close.is-large[aria-label="close"]')).toBeTruthy();
    });

    it('should render child content correctly', () => {
      const modalContent = element.querySelector('.modal-content');
      expect(modalContent.querySelector('.child-content')).toBeTruthy();
    });
  })
});
