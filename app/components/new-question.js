import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    }
  },
  saveQuestion() {
    var params = {
      author: this.get('author'),
      city: this.get('city'),
      country: this.get('country'),
      question: this.get('question'),
      aboutMe: this.get('aboutMe'),
    };
    this.set('addNewQuestion', false);
    this.sendAction('saveQuestion', params);
  }
});
