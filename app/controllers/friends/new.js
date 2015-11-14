import FriendBaseController from './base';

export default FriendBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('friends.index');

      return false;
    }
  }
});
