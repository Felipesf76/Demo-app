import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Industry = new Mongo.Collection(
   'industry'
);

Meteor.methods({
   'industry.insert'(newIndutry) {
      const industry = {
         ...newIndutry,
         component: 'industry',
         results: [],
      };
      Industry.insert(industry);
   },
});
