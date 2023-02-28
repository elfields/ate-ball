import { newSpecPage } from '@stencil/core/testing';
import { TakeawayListItem } from '../takeaway-list-item';

describe('takeaway-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TakeawayListItem],
      html: `<takeaway-list-item></takeaway-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <takeaway-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </takeaway-list-item>
    `);
  });
});
