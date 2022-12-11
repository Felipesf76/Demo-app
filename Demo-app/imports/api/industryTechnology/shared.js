import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const IndustryTechnology =
   new Mongo.Collection('industryTechnology');

Meteor.methods({
   'industryTechnology.insert'(newValue) {
      IndustryTechnology.insert(newValue);
   },
});
