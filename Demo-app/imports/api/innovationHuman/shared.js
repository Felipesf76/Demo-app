import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const InnovationHuman =
   new Mongo.Collection('innovationHuman');

Meteor.methods({
   'innovationHuman.insert'(newValue) {
      InnovationHuman.insert(newValue);
   },
});
