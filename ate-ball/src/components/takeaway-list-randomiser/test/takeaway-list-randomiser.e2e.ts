import { newE2EPage } from '@stencil/core/testing';

describe('takeaway-list-randomiser', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<takeaway-list-randomiser></takeaway-list-randomiser>');

    const element = await page.find('takeaway-list-randomiser');
    expect(element).toHaveClass('hydrated');
  });
});
