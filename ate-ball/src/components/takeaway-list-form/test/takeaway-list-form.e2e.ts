import { newE2EPage } from '@stencil/core/testing';

describe('takeaway-list-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<takeaway-list-form></takeaway-list-form>');

    const element = await page.find('takeaway-list-form');
    expect(element).toHaveClass('hydrated');
  });
});
