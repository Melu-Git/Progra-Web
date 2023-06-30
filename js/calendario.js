document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Curso Java',
                start: '2023-06-18',
                end:'2023-07-18'
            },
            {
                title: 'Curso HTML',
                start: '2023-06-8',
                end:'2023-07-8'
            },
            {
                title: 'Curso JavaScript',
                start: '2023-06-28',
                end:'2023-07-28'
            },
            {
                title: 'Curso Css',
                start: '2023-06-12',
                end:'2023-07-12'
            },
            {
                title: 'Curso Python',
                start: '2023-07-28',
                end:'2023-08-28'
            },
            {
                title: 'Curso C++',
                start: '2023-06-23',
                end:'2023-07-23'
            }
        ]
    }); 

    calendar.render();
  });