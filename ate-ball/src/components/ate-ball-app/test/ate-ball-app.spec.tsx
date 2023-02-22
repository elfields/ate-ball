import { newSpecPage } from '@stencil/core/testing';
import { AteBallApp } from '../ate-ball-app';

describe('ate-ball-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AteBallApp],
      html: `<ate-ball-app></ate-ball-app>`,
    });
    expect(page.root).toEqualHtml(`
      <ate-ball-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ate-ball-app>
    `);
  });
});
