import { TestWindow } from '@stencil/core/testing';
import { PlotModal } from './plot-modal';


describe('PlotModal', () => {
  it('should load', () => {
    expect(new PlotModal()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    let element: HTMLSaltastroPlotModalElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PlotModal],
        html: `<saltastro-plot-modal>
<div class="child-content"></div>
</saltastro-plot-modal>`
                                });
    });

    it('should render elements with the correct classes', () => {
      const modal = element.querySelector('div.saltastro-plot.modal');
      expect(modal).toBeTruthy();
      expect(modal.querySelector('div.modal-background')).toBeTruthy();
      expect(modal.querySelector('div.modal-content')).toBeTruthy();
      expect(modal.querySelector('button.modal-close.is-large[aria-label="close"]')).toBeTruthy();
    });

    it('should render child content correctly', () => {
      const modalContent = element.querySelector('.modal-content');
      expect(modalContent.querySelector('.child-content')).toBeTruthy();
    });
  });

  describe('toggle', () => {
    it('should toggle the is-active class', async () => {
      const testWindow = new TestWindow();
      const element = await testWindow.load({
        components: [PlotModal],
        html: '<saltastro-plot-modal></saltastro-plot-modal>'
                                      });

      // the modal is hidden by default
      expect(element.querySelector('.modal.is-active')).not.toBeTruthy();

      // toggle visibility on
      element.toggle();
      expect(element.querySelector('.modal.is-active')).toBeTruthy();

      // toggle visibility off again
      element.toggle();
      expect(element.querySelector('.modal.is-active')).not.toBeTruthy();
    })
  })
});
