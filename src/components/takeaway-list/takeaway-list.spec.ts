// import { newSpecPage } from '@stencil/core/testing';
// import { TakeawayList } from './takeaway-list.spec';

// describe('takeaway-list', () => {
//   it('renders', async () => {
//     const { root } = await newSpecPage({
//       components: [TakeawayList],
//       html: '<takeaway-list></takeaway-list>',
//     });
//     expect(root).toEqualHtml(`
//       <takeaway-list>
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm
//           </div>
//         </mock:shadow-root>
//       </takeaway-list>
//     `);
//   });

//   it('renders with values', async () => {
//     const { root } = await newSpecPage({
//       components: [TakeawayList],
//       html: `<takeaway-list first="Stencil" last="'Don't call me a framework' JS"></takeaway-list>`,
//     });
//     expect(root).toEqualHtml(`
//       <takeaway-listfirst="Stencil" last="'Don't call me a framework' JS">
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm Stencil 'Don't call me a framework' JS
//           </div>
//         </mock:shadow-root>
//       </takeaway-list>
//     `);
//   });
// });
