function formatDate(date) {
    let now = new Date() - date; 
  
    if (now < 1000) { 
      return 'Прямо сейчас';
    }
  
    let sec = Math.floor(now / 1000); 
    if (sec < 60) {
      return sec + ' n сек. назад';
    }
  
    let min = Math.floor(now / 60000); 
    if (min < 60) {
      return min + ' m мин. назад';
    }
  
    let day = date;
    day = [
      '0' + day.getDate(),
      '0' + (day.getMonth() + 1),
      '' + day.getFullYear(),
      '0' + day.getHours(),
      '0' + day.getMinutes()
    ].map(component => component.slice(-2)); 
   
    return day.slice(0, 3).join('.') + ' ' + day.slice(3).join(':');
  }
  
  alert( formatDate(new Date(new Date - 1)) ); 
  alert( formatDate(new Date(new Date - 30 * 1000)) ); 
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 
  alert( formatDate(new Date(new Date - 86400 * 1000)) );