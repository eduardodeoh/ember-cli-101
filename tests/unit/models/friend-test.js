import { moduleForModel, test } from 'ember-qunit';

moduleForModel('friend', 'Friend', {
  // Specify the other units that are required for this test.
  needs: ['model:article']
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(model);
});

test('fullName joins first and last name', function(assert) {
  var model = this.subject({firstName: 'Syd', lastName: 'Barret'});

  assert.equal(model.get('fullName'), 'Syd Barret', 'Updates fullName test 1');

  Ember.run(function() {
    model.set('firstName', 'Geddy');
  });

  assert.equal(model.get('fullName'), 'Geddy Barret', 'Updates fullName test 2');
});

test('articles relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles');
  assert.equal(relationship.kind, 'hasMany');
})

