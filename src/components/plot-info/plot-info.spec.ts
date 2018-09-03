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

    it('should render a div with the correct class', () => {
      expect(element.querySelector('div.saltastro-plot-info')).toBeTruthy();
    });

    it('should render child content correctly', () => {
      const plotInfo = element.querySelector('.saltastro-plot-info');
      expect(plotInfo.querySelector('.child-content')).toBeTruthy();
    })
  });

  describe('toggle', () => {
    it('should toggle the is-invisible class', async () => {
      const testWindow = new TestWindow();
      const element = await testWindow.load({
        components: [PlotInfo],
        html: '<saltastro-plot-info></saltastro-plot-info>'
                                            });

      // by default the plot info is invisible
      expect(element.classList).toContain('is-invisible');

      // toggle the visibility on
      element.toggle();
      expect(element.classList).not.toContain('is-invisible');

      // toggle the visibility off again
      element.toggle();
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
