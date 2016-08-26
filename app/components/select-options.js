import Ember from 'ember';

export default Ember.Component.extend({
  options1: [],
  options2: ['option1 ', 'option2', 'option3'],

  actions: {
    selectOption1(option) {
      this.set('selectedOption1', option);
    },
    selectOption2(option) {
      this.set('selectedOption2', option);
    },
  },
});
