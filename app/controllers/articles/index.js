import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ['borrowed', 'returned'],
  showReturned: false,
  queryParams: ['showReturned'],
  actions: {
    setReturnedList: function(model) {
      // this.set('sortBy', fieldName);
      // this.toggleProperty('sortAscending');
      // console.log('Sorting by', fieldName);
      // console.log('Sorting Asc?', this.get('sortAscending'));
      this.toggleProperty('showReturned');
      console.log('Show only borrowed', this.get('showReturned'));
      model.filterBy('state', 'borrowed');
      return false;
    }
  }
});
