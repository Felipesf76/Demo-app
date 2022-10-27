import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
   'user.insert'(newUser) {
      Accounts.createUser({
         email: newUser.email,
         password: newUser.password,
      });
   },
});
