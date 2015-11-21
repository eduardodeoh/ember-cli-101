import Ember from 'ember';

export default Ember.Controller.extend({
  sortAscending: true,
  // We'll use sortBy to hold the name of the field we want to sort by.
  sortBy: 'firstName',
  queryParams: ['sortBy', 'sortAscending'],
  actions: {
    // The sortBy function receives the name of the function and toggle
    // sortAscending. The function toggleProperty comes from the [Observable Mixin]
    // it switches a boolean property between false and true
    setSortBy: function(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');
      console.log('Sorting by', fieldName);
      console.log('Sorting Asc?', this.get('sortAscending'));
      return false;
    }
  }
});
