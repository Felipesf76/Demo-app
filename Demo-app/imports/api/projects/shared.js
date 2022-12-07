import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection(
   'projects'
);

Meteor.methods({
   'projects.insert'(newValue) {
      Projects.insert(newValue);
   },
});
