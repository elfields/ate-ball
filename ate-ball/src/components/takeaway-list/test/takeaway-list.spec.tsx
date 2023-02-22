import { newSpecPage } from '@stencil/core/testing';
import { TakeawayList } from '../takeaway-list';

describe('takeaway-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TakeawayList],
      html: `<takeaway-list></takeaway-list>`,
    });
    expect(page.root).toEqualHtml(`
      <takeaway-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </takeaway-list>
    `);
  });
});
