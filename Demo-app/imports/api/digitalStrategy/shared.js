import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const DigitalStrategy =
   new Mongo.Collection('digitalStrategy');

Meteor.methods({
   'digitalStrategy.insert'(newValue) {
      DigitalStrategy.insert(newValue);
   },
});
