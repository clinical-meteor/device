// if (typeof Template !== 'undefined') {
//   /*
//    * Template Rendering Shortcut
//    */
//   Template.registerHelper('deviceRender', function() {
//     var name = this;
//     if (! _.isString(name)) {
//       // If meteor-router is installed, no passed name will load Meteor.Router.page()
//       if (typeof Meteor.Router !== 'undefined') {
//         name = Meteor.Router.page();
//       } else {
//         name = '';
//       }
//     }
//
//     var device_type = Meteor.Device.type();
//     var suffix = Meteor.Device.getSuffix(device_type);
//
//     var device_name = name + (suffix || '');
//
//     if (Template[device_name]) {
//       // Try to load the suffixed template
//       return Template[device_name];
//     } else if (Template[name]) {
//       // Fallback to unsuffixed template if suffixed template doesn't exist
//       return Template[name];
//     } else {
//       // Blaze gets grumpy if you return undefined
//       return null;
//     }
//   });
//
//   /*
//    * Device Type Helpers
//    */
//   Template.registerHelper('isTV', function() {
//     return Meteor.Device.isTV();
//   });
//   Template.registerHelper('isTablet', function() {
//     return Meteor.Device.isTablet();
//   });
//   Template.registerHelper('isPhone', function() {
//     return Meteor.Device.isPhone();
//   });
//   Template.registerHelper('isDesktop', function() {
//     return Meteor.Device.isDesktop();
//   });
//   Template.registerHelper('isBot', function() {
//     return Meteor.Device.isBot();
//   });
//
//   Template.registerHelper('device_type', function() {
//     return Meteor.Device.type();
//   });
// }
