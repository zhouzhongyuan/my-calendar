var days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
var months = [31,28,31,30,31,30,31,31,30,31,30,31];
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





var startDate = new Date();
// startDate = new  Date("09 02,2016");
var dayOfMonth = startDate.getDate();
var dayOfWeek = startDate.getDay();

console.log(startDate);
startDate.setDate(dayOfMonth - (dayOfWeek - 1));
console.log(startDate);


function getSevenArray(startDate) {

    var arr = [];
    for(var i = 0; i < 7; i++){
        var dayOfMonth = startDate.getDate();
        arr.push(dayOfMonth);
        startDate.setDate(dayOfMonth + 1);
        console.log(startDate)
    }
    return arr;
    console.log(arr);
}
var monthRowViewAttribute = {
    days: days,
    position:{
        top:'0%',
        height:'26%',
    },
    dates:getSevenArray(startDate)
}

function renderMonthView(monthRowViewAttribute) {
    var view = new MonthRowView(monthRowViewAttribute);
    $('#mvEventContainer').append( view.render().el );
}

renderMonthView(monthRowViewAttribute);

monthRowViewAttribute= {
    days: days,
    position:{
        top:'25%',
        height:'26%',
    },
    dates:getSevenArray(startDate)
};
renderMonthView(monthRowViewAttribute);

monthRowViewAttribute = {
    days: days,
    position:{
        top:'50%',
        height:'26%',
    },
    dates:getSevenArray(startDate)
};
renderMonthView(monthRowViewAttribute);

monthRowViewAttribute = {
    days: days,
    position:{
        top:'75%',
        bottom:'0',
    },
    dates:getSevenArray(startDate)
};
renderMonthView(monthRowViewAttribute);