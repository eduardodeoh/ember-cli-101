import FriendBaseController from '../base-controller';

export default FriendBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('friends.show', this.get('model'));

      return false;
    }
  }
});
