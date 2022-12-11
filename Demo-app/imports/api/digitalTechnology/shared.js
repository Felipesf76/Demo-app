import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const DigitalTechnology =
   new Mongo.Collection('digitalTechnology');

Meteor.methods({
   'digitalTechnology.insert'(newValue) {
      DigitalTechnology.insert(newValue);
   },
});
