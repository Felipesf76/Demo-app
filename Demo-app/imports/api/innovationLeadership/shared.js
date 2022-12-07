import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const InnovationLeadership =
   new Mongo.Collection('innovationLeadership');

Meteor.methods({
   'innovationLeadership.insert'(newValue) {
      InnovationLeadership.insert(newValue);
   },
});
