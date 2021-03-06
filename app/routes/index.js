import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestion3(params) {
      if (params.author == null || params.question == null || params.country == null || params.city == null || params.aboutMe == null) {
        alert("Please fill out all fields to submit a question.");
      } else {
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
        alert("Thank you for submitting your question. Check back soon to see if an answer has been contributed.");
        this.transitionTo('index');
      }
    }
  }
});
