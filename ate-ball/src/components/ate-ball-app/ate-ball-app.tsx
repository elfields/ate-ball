import { Component, State, h } from '@stencil/core';
import { TakeawayName } from '../../models/takeawayName';

@Component({
  tag: 'ate-ball-app',
  styleUrl: 'ate-ball-app.css',
  shadow: true,
})
export class AteBallApp {
  @State() names: TakeawayName[] = []; 
  @State() text: string; 

  render() {
    const handleOnChange = (e) => this.handleOnChange(e);
    const handleSubmit = (e) => this.handleSubmit(e);

    return (
      <div class="ate-ball-app">
        <h3>Your Favourite Takeaways</h3>
        <takeaway-list takeawayNames ={this.names} />
        <takeaway-list-form onSubmit={handleSubmit} onInputChange={handleOnChange} takeawayNamesLength={this.names.length}/>
      </div>
    );
  }

  private handleSubmit(e) {
    e.preventDefault();
    if (!this.text.length) {
      return;
    }
    const newTakeawayName = new TakeawayName(this.text);

    this.text = '';
    this.names = [...this.names, newTakeawayName];
  }

  private handleOnChange(e) {
    this.text = e.detail;
  }

}
