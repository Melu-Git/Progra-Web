document.addEventListener('DOMContentLoaded', function(){
    var calendarEl= document.getElementById('.contenedor-calendario');
    var calendar= new FullCalendar.Calendar (calendarEl, {
        plugins: [ 'dayGrid'],
        locale: 'es', 
        events: [
            {
                tittle: 'cuso java',
                start: '2023-06-16',
                end: '2023-06-26'
            },
            {
                tittle: 'cuso 2',
                start: '2023-06-18',
                end: '2023-06-28'
            }
        ]
     } );
     calendar.render();
});
import { Calendar } from '@fullcalendar/core';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

document.addEventListener('DOMContentLoaded', function() {
  let draggableEl = document.getElementById('mydraggable');
  let calendarEl = document.getElementById('mycalendar');

  let calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin ],
    droppable: true
  });

  calendar.render();

  new Draggable(draggableEl);
});