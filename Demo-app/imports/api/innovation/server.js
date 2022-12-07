import { Meteor } from 'meteor/meteor';
import { Innovation } from './shared';

Meteor.publish(
   'innovation.results',
   (proyectName) => {
      return Innovation.find({
         name: proyectName,
      });
   }
);

export { Innovation };
