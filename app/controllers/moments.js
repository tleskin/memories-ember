import Ember from 'ember';

export default Ember.Controller.extend({

  caption: null,
  content: null,
  location: null,
  happenedAt: null,

  actions: {

    addNewMoment: function () {
      let moment = this.getProperties('caption', 'content', 'location', 'happenedAt');
      this.store.createRecord('moment', moment).save();
    }

  }

});
