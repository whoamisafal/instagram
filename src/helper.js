
function getCustomTime(timestamp){
    var date = new Date(timestamp);
   
   
    let sec=timestamp/1000;
   if(sec<60){
       return Math.round(sec)+" sec ago";
   }
   let min=sec/60;
    if(min<60){
        min=Math.round(min)
        if(min<=1){
            return "1 min ago";
        }
        if(min==60 && sec==59){
            return "1 hr ago";
        }
        return min+" mins ago";
    }
    let hour=min/60;
    if(hour<24){
        let hr=Math.round(hour);
        if(hr<=1){
            return "1 hour ago";
        }
        return hr+" hours ago";
    }
    let day=hour/24;
    if(day<30){
        day=Math.round(day)
        if(day<=1){
            return "1 day ago";
        }
        return day+" days ago";
    }
    let month=day/30;
    if(month<12){
        month=Math.round(month)
        if(month<=1){
            return "1 month ago";
        }
        return month+" months ago";
    }
    return date.getTimezoneOffset();

    

}

function getCustomTimeForComment(timestamp){
    var date = new Date(timestamp);
   
   
    let sec=timestamp/1000;
   if(sec<60){
       return Math.round(sec)+"s";
   }
   let min=sec/60;
    if(min<60){
        min=Math.round(min)
        if(min<=1){
            return "1m";
        }
        if(min==60 && sec==59){
            return "1h";
        }
        return min+"m";
    }
    let hour=min/60;
    if(hour<24){
        let hr=Math.round(hour);
        if(hr<=1){
            return "1h";
        }
        return hr+"h";
    }
    let day=hour/24;
    if(day<30){
        day=Math.round(day)
        if(day<=1){
            return "1d";
        }
        return day+"d";
    }
    let month=day/30;
    if(month<12){
        month=Math.round(month)
        if(month<=1){
            return "1m";
        }
        return month+"m";
    }
    return date.getTimezoneOffset();

    

}

export default {getCustomTime,getCustomTimeForComment}