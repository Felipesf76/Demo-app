import { Meteor } from 'meteor/meteor';
import { Projects } from './shared';

Meteor.publish('projects.list', () => {
   return Projects.find();
});

Meteor.publish('project.name', (nameProyect) => {
   return Projects.find({ name: nameProyect });
});

export { Projects } from './shared';
