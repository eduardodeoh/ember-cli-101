import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      console.log('+- save action bubbled up to application route');
      return true;
    },

    cancel() {
      console.log('+- save action bubbled up to application new route');
      return true;
    }
  }
})
