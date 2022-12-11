import { Meteor } from 'meteor/meteor';
import { DigitalTransformation } from './shared';

Meteor.publish(
   'digitalTransformation.results',
   (proyectName) => {
      return DigitalTransformation.find({
         name: proyectName,
      });
   }
);

export { DigitalTransformation };
