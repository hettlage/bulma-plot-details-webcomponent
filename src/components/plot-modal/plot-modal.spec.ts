import { TestWindow } from '@stencil/core/testing';
import { PlotModal } from './plot-modal';


describe('PlotModal', () => {
  it('should load', () => {
    expect(new PlotModal()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    let element: HTMLSaaoPlotModalElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PlotModal],
        html: `<saao-plot-modal>
<div class="child-content"></div>
</saao-plot-modal>`
                                });
    });

    it('should render elements with the correct classes', () => {
      const modal = element.querySelector('div.saao-plot.modal');
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
