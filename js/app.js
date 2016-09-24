var days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
var dates = [19, 20, 21, 22, 23, 24, 25];
var MvDaynamesTableView = Backbone.View.extend({
    el: $('#mvDaynamesTable'),
    template: _.template('<tbody><tr><% for(var day in days){ %>    <th class="mv-dayname" title="<%= days[day] %>"><%= days[day] %></th>    <% } %></tr></tbody>'),
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template({days:days}));
    }
});
var mvDaynamesTableView = new MvDaynamesTableView();

var MvEventContainerView = Backbone.View.extend({
    el: $('#mvEventContainer'),
    template: _.template(''),
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template({}));
    }
});
var mvEventContainerView = new MvEventContainerView();

//子View
var MonthRowView = Backbone.View.extend({
    template: _.template($('#monthRowBase').html()),
    initialize: function () {
        // this.render();
    },
    render: function () {
        this.$el.html(this.template(monthRowViewAttribute));
        return this;
    }
});
//父View
var monthRowViewAttribute = {
    days: days,
    position:{
        top:'0%',
        height:'26%',
    },
    dates:dates
}
var view = new MonthRowView(monthRowViewAttribute);
$('#mvEventContainer').append( view.render().el );

monthRowViewAttribute.position = {
    top:'25%',
    height:'26%',
};
var view = new MonthRowView(monthRowViewAttribute);
$('#mvEventContainer').append( view.render().el );

monthRowViewAttribute.position = {
    top:'50%',
    height:'26%',
};
var view = new MonthRowView(monthRowViewAttribute);
$('#mvEventContainer').append( view.render().el );

monthRowViewAttribute.position = {
    top:'75%',
    bottom:'0',
};
var view = new MonthRowView(monthRowViewAttribute);
$('#mvEventContainer').append( view.render().el );