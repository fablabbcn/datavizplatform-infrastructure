/*****************************************************************************/
/* List: Event Handlers */
/*****************************************************************************/
Template.List.events({
});

/*****************************************************************************/
/* List: Helpers */
/*****************************************************************************/
Template.List.helpers({
    allVis: function() {
        return DagsVis.find();
    },
});

/*****************************************************************************/
/* List: Lifecycle Hooks */
/*****************************************************************************/
Template.List.onCreated(function () {
});

Template.List.onRendered(function () {
});

Template.List.onDestroyed(function () {
});
