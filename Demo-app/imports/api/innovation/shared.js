import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Innovation = new Mongo.Collection(
   'innovation'
);

Meteor.methods({
   'innovation.insert'(newComponent) {
      const newInnovation = {
         ...newComponent,
         component: 'innovation',
         results: [],
      };
      Innovation.insert(newInnovation);
   },
   'innovation.update'(name, newValue) {
      const object = Innovation.findOne({
         name: name,
      });
      Innovation.update(object, {
         $push: { results: newValue },
      });
   },
   'innovationForRequest.update'(
      name,
      axe,
      newValue
   ) {
      const object = Innovation.findOne({
         name: name,
      });
      Innovation.update(
         object,
         {
            $set: {
               'result.$[element].value':
                  newValue,
            },
         },
         {
            arrayFilters: [
               { 'element.label': axe },
            ],
         }
      );
   },
});
