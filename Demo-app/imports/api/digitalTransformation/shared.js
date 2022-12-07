import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const DigitalTransformation =
   new Mongo.Collection('digitalTransformation');

Meteor.methods({
   'digitalTransformation.insert'(newTd) {
      const newComponent = {
         ...newTd,
         component: 'digitalTransformation',
         results: [],
      };
      DigitalTransformation.insert(newComponent);
   },
});
