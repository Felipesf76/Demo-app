import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const DigitalCulture =
   new Mongo.Collection('digitalCulture');

Meteor.methods({
   'digitalCulture.insert'(newValue) {
      DigitalCulture.insert(newValue);
   },
});
