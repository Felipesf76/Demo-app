import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const DigitalClient = new Mongo.Collection(
   'digitalClient'
);

Meteor.methods({
   'digitalClient.insert'(newValue) {
      DigitalClient.insert(newValue);
   },
});
