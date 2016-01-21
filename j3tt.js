if (Meteor.isClient) {
  //Template.body.rendered = function() {
  //  $('#summernote').summernote({
  //    height: 200,   // set editable area's height
  //    focus: true    // set focus editable area after Initialize summernote
  //  });
  //}

  //Router.route('/', function () {
  //  this.render('what_is_j3tt');
  //});

  Router.route('/:_story', function () {
    console.log(this.params._story);
    this.render(this.params._story);
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
