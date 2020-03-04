/**************************************************************************/
$(document).ready(function () {
  $(".notification_icon .fa-bell").click(function () {
    $(".dropdown").toggle();
  });
});

$(document).ready(function () {
  $(".message_icon .fa-comment-alt").click(function () {
    $(".dropdown1").toggle();
  });
});

$(document).ready(function () {
  $(".crosshair_icon .fa-crosshairs").click(function () {
    $(".dropdown2").toggle();
  });
});

$(document).ready(function () {
  $(".profile_icon .fa-user").click(function () {
    $(".dropdown3").toggle();
  });
});

$(document).ready(function () {
  $(".leftIcons .fa-search ").click(function () {
    $(".searchBox").toggle();
  });
});

/*************** table from json ****************************************/
$(document).ready(function () {
  $.getJSON("./table.json", function (data) {
    var active_data = '';
    $.each(data, function (key, value) {
      active_data += '<tr>';
      active_data += '<td>' + value.Top_active_members+ '</td>';
      active_data += '<td>' + value.View + '</td>';
      active_data += '<td>' + value.Country + '</td>';
      active_data += '<td>' + value.Status + '</td>';
      active_data += '<td>' + value.Comments + '</td>';
    });
    $('#active_user').append(active_data);
  });
});

/************** button hover ****************************************/
$(document).ready(function(){
  $(".view").hover(function(){
    $(this).css("background-color", "black");
     $(this).css("color", "white");},
     function(){
    $(this).css("background-color", "white");
     $(this).css("color", "cadetblue");
  });
});
/************* chart *********************************************************************/
Highcharts.chart('container', {
  chart: {
      type: 'areaspline'
  },
  title: {
      text: undefined
  },
 legend: {
      enabled: false
  },
  xAxis: {
     labels: {
        enabled: false
    },
      plotBands: [{ // visualize the weekend
          from: 4.5,
          to: 6.5,
          color: 'rgba(68, 170, 213, .2)'
      }]
  },
  yAxis: {
      title: {
           text: undefined
      },
      labels: {
        enabled: false
    },
  },
  tooltip: {
      shared: true,
      valueSuffix: ' units'
  },
  credits: {
      enabled: false
  },
  plotOptions: {
      areaspline: {
          fillOpacity: 0.5
      }
  },
  series: [{
      name: 'product',
      data: [3, 4, 3, 5, 4, 10, 12]
  }, ]
});