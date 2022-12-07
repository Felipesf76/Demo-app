import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const InnovationInvestigation =
   new Mongo.Collection(
      'innovationInvestigation'
   );

Meteor.methods({
   'innovationInvestigation.insert'(newValue) {
      InnovationInvestigation.insert(newValue);
   },
});
