import { newE2EPage } from '@stencil/core/testing';

describe('ate-ball-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ate-ball-app></ate-ball-app>');

    const element = await page.find('ate-ball-app');
    expect(element).toHaveClass('hydrated');
  });
});
