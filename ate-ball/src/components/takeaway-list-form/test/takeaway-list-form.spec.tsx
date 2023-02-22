import { newSpecPage } from '@stencil/core/testing';
import { TakeawayListForm } from '../takeaway-list-form';

describe('takeaway-list-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TakeawayListForm],
      html: `<takeaway-list-form></takeaway-list-form>`,
    });
    expect(page.root).toEqualHtml(`
      <takeaway-list-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </takeaway-list-form>
    `);
  });
});
