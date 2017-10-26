/*****************************************************************************/
/* Vis: Event Handlers */
/*****************************************************************************/
Template.Vis.events({
});

/*****************************************************************************/
/* Vis: Helpers */
/*****************************************************************************/
Template.Vis.helpers({
});

/*****************************************************************************/
/* Vis: Lifecycle Hooks */
/*****************************************************************************/
Template.Vis.onCreated(function () {
    Meteor.subscribe('dags');
    Meteor.subscribe('dagsvis');
});

Template.Vis.onRendered(function () {
    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }];
    const settings = {
      margin: {
        t: 0
      }
    };
    Plotly.plot($('#visdiv')[0], data, settings);
});

Template.Vis.onDestroyed(function () {
});
