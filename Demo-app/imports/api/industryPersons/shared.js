import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const IndustryPersons =
   new Meteor.Collection('industryPersons');

Meteor.methods({
   'industryPersons.insert'(newValue) {
      IndustryPersons.insert(newValue);
   },
});
