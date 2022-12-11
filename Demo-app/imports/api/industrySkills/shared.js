import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const IndustrySkills =
   new Mongo.Collection('industrySkills');

Meteor.methods({
   industrySkills(newValue) {
      IndustrySkills.insert(newValue);
   },
});
