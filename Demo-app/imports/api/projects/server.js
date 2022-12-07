import { Meteor } from 'meteor/meteor';
import { Projects } from './shared';

Meteor.publish('projects.list', () => {
   return Projects.find();
});

export { Projects } from './shared';
