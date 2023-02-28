import { newSpecPage } from '@stencil/core/testing';
import { TakeawayListRandomiser } from '../takeaway-list-randomiser';

describe('takeaway-list-randomiser', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TakeawayListRandomiser],
      html: `<takeaway-list-randomiser></takeaway-list-randomiser>`,
    });
    expect(page.root).toEqualHtml(`
      <takeaway-list-randomiser>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </takeaway-list-randomiser>
    `);
  });
});
