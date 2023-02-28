import { newE2EPage } from '@stencil/core/testing';

describe('takeaway-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<takeaway-list-item></takeaway-list-item>');

    const element = await page.find('takeaway-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
