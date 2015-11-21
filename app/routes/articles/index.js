import Ember from 'ember';

export default Ember.Route.extend({
  // model(params) {
  //   var articles = this.modelFor('friends/show').get('articles')
  //   return this.store.query('article', params);
  // },
  queryParams: {
    showReturned: {
      refreshModel: true
    }
  },
  model() {
    return this.modelFor('friends/show').get('articles');
  },
  actions: {
    save(model) {
      model.save();
      return false;
    }
  },
  // Problemas aqui :|
  // resetController(controller, isExiting) {
  //   if (isExiting) {
  //     var model = this.modelFor('friends/show').get('articles');
  //     model.rollback();
  //   }
  // }
});
