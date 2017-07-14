import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  city: DS.attr(),
  country: DS.attr(),
  aboutMe: DS.attr()
});
