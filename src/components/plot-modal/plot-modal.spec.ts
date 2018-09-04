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
      const modal = element.querySelector('div.modal');
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

  describe('show', () => {
    it('should add the is-active class', async () => {
      const testWindow = new TestWindow();
      const element = await testWindow.load({
                                              components: [PlotModal],
                                              html: '<saltastro-plot-modal></saltastro-plot-modal>'
                                            });

      // the modal is initially hidden
      expect(element.querySelector('.modal.is-active')).not.toBeTruthy();

      // show the modal
      element.show();
      expect(element.querySelector('.modal.is-active')).toBeTruthy();

      // calling show again makes no difference
      element.show();
      expect(element.querySelector('.modal.is-active')).toBeTruthy();
    })
  });

  describe('hide', () => {
    it('should remove the is-active class', async () => {
      const testWindow = new TestWindow();
      const element = await testWindow.load({
                                              components: [PlotModal],
                                              html: `<saltastro-plot-modal></saltastro-plot-modal>`
                                            });

      // ensure the modal is initially shown
      element.show();
      expect(element.querySelector('.modal.is-active')).toBeTruthy();

      // hide the modal
      element.hide();
      expect(element.querySelector('.modal.is-active')).not.toBeTruthy();

      // calling hide again makes no difference
      element.hide();
      expect(element.querySelector('.modal.is-active')).not.toBeTruthy();
    })
  });

  describe('interaction', () => {
    let testWindow: TestWindow;
    let element: HTMLSaltastroPlotModalElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
                                        components: [PlotModal],
                                        html: '<saltastro-plot-modal>Content</saltastro-plot-modal>'
                                      });
    });

    it('should close the plot modal when it is visible and its close button is clicked', () => {
      const hide = jest.fn();
      Object.defineProperty(element, 'hide', {value: hide});

      // show the plot modal
      element.show();

      // close it
      const closeButton: HTMLElement = element.querySelector('button.modal-close');
      closeButton.click();
      expect(hide).toHaveBeenCalled();
    });

    it('should not propagate the mouse event when the close button is clicked', () => {
      // show the plot modal
      element.show();

      const show = jest.fn();
      Object.defineProperty(element, 'show', {value: show});

      // close it
      const closeButton: HTMLElement = element.querySelector('button.modal-close');
      closeButton.click();
      expect(show).not.toHaveBeenCalled();
    })
  });
});
