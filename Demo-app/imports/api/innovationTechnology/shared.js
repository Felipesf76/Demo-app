import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const InnovationTechnology =
   new Mongo.Collection('innovationTechnology');

Meteor.methods({
   'innovationTechnology.insert'(newValue) {
      InnovationTechnology.insert(newValue);
   },
});
