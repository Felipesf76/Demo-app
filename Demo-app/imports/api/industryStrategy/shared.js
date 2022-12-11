import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const IndustryStrategy =
   new Mongo.Collection('industryStrategy');

Meteor.methods({
   'industryStrategy.insert'(newValue) {
      IndustryStrategy.insert(newValue);
   },
});
