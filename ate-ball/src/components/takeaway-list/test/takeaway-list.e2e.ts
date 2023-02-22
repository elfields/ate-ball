import { newE2EPage } from '@stencil/core/testing';

describe('takeaway-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<takeaway-list></takeaway-list>');

    const element = await page.find('takeaway-list');
    expect(element).toHaveClass('hydrated');
  });
});
