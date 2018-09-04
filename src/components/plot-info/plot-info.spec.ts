import { TestWindow } from '@stencil/core/testing';
import { PlotInfo } from './plot-info';


describe('PlotInfo', () => {
  it('should load', () => {
    expect(new PlotInfo()).toBeTruthy();
  });

  describe('rendering', () => {
    let testWindow: TestWindow;
    let element: HTMLSaltastroPlotInfoElement;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PlotInfo],
        html: `<saltastro-plot-info>
<div class="child-content"></div>
</saltastro-plot-info>`
                                      })
    });

    it('should render child content', () => {
      expect(element.querySelector('.child-content')).toBeTruthy();
    })
  });

  describe('show', () => {
    it('should remove the is-invisible class', async () => {
      const testWindow = new TestWindow();
      const element = await testWindow.load({
                                              components: [PlotInfo],
                                              html: '<saltastro-plot-info></saltastro-plot-info>'
                                            });

      // ensure the plot info initially is invisible
      expect(element.classList).toContain('is-invisible');

      // show the plot info
      element.show();
      expect(element.classList).not.toContain('is-invisible');

      // calling the show method again makes no difference
      element.show();
      expect(element.classList).not.toContain('is-invisible');
    })
  });

  describe('hide', () => {
    it('should add the is-invisible class', async () => {
      const testWindow = new TestWindow();
      const element = await testWindow.load({
                                              components: [PlotInfo],
                                              html: '<saltastro-plot-info></saltastro-plot-info>'
                                            });

      // ensure the plot info initially is visible
      element.show();
      expect(element.classList).not.toContain('is-invisible');

      // hide the plot info
      element.hide();
      expect(element.classList).toContain('is-invisible');

      // calling the hide method again makes no difference
      element.hide();
      expect(element.classList).toContain('is-invisible');
    })
  });

  describe('move', () => {
    it('should move the plot info', async () => {
      const testWindow = new TestWindow();
      const element = await testWindow.load({
        components: [PlotInfo],
        html: '<saltastro-plot-info></saltastro-plot-info>'
                                            });

      // move to (200, 500)
      element.move(200, 500);
      expect(element.style.left).toBe('200px');
      expect(element.style.top).toBe('500px');

      // move to (-80, -1024)
      element.move(-80, -1024);
      expect(element.style.left).toBe('-80px');
      expect(element.style.top).toBe('-1024px');
    })
  })
});
