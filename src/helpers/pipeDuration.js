export default function pipeDuration(time){
    const hours = Math.floor(time / 60);          
    const minutes = time % 60;
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`
  }