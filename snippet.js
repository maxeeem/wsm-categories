var departments = {}

$('.ags_department_list.widget_cat_menu.cat_children')
.filter(':not(.wsm_hidden)').last().children().children()
.each(function() {
  departments[$(this).text()] = $(this).attr('href')
})

$('div[class*=wsm-cat-list-cat]')
.each(function() {
  var category = $(this).children().children('.wsm-cat-title').children().text()
  if(category in departments) {
    $(this).children().children('.wsm-cat-title, .wsm-cat-image').children()
    .attr('href', departments[category])
    .addClass('filter_category')
  }
  else {
    $(this).hide()
  }
})
