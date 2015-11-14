import FriendBaseController from './base';

export default FriendBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('friends.show', this.get('model'));

      return false;
    }
  }
});
