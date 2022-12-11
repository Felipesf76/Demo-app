import { Meteor } from 'meteor/meteor';
import { Industry } from './shared';

Meteor.publish(
   'industry.results',
   (proyectName) => {
      return Industry.find({
         name: proyectName,
      });
   }
);

export { Industry };
