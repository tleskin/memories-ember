import DS from 'ember-data';

var Model = DS.Model.extend({
  happenedAt: DS.attr(),
  caption: DS.attr('string'),
  content: DS.attr('string'),
  location: DS.attr('string')
});

export default Model;
