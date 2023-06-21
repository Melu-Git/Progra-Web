document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
        {
            title: 'Curso Java',
            start: '2023-06-19',
            end:'2023-07-03'
        },
        {
            title: 'Curso HTML',
            start: '2023-05-29',
            end:'2023-06-09'
        },
        {
            title: 'Curso JavaScript',
            start: '2023-09-04',
            end:'2023-09-18'
        },
        {
            title: 'Curso Css',
            start: '2023-07-10',
            end:'2023-07-24'
        },
        {
            title: 'Curso Python',
            start: '2023-08-14',
            end:'2023-08-28'
        },
        {
            title: 'Curso C++',
            start: '2023-07-20',
            end:'2023-08-03'
        }
        ]
    }); 

    calendar.render();
  });