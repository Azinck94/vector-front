import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('customer', params.customer_id);
  },
//
//   actions: {
//    toggleInfoDone (info) {
//       info.toggleProperty('done');
//       info.save();
//     },
//     deleteInfo (info) {
//       info.destroyRecord();
//     },
//     createInfo (info) {
//       let infoRecord = this.get('store').createRecord('info', info);
//       infoRecord.save();
//      }
//   },
// });
