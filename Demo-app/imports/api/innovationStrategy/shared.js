import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const InnovationStrategy =
   new Mongo.Collection('innovationStrategy');

Meteor.methods({
   'innovationStrategy.insert'(newValues) {
      InnovationStrategy.insert(newValues);
   },
});
