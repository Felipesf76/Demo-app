import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const InnovationCulture =
   new Mongo.Collection('innovationCulture');

Meteor.methods({
   'innovationCulture.insert'(newValue) {
      InnovationCulture.insert(newValue);
   },
});
