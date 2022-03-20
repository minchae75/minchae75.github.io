const clock = document.querySelector("h2#clock");
const calander = document.querySelector("h2#calander");

function getClock() {
  const Now = new Date();
  const hours = String(Now.getHours()).padStart(2, "0");
  const minutes = String(Now.getMinutes()).padStart(2, "0");
  const seconds = String(Now.getSeconds()).padStart(2, "0");
  const year = String(Now.getFullYear());
  const month = String(Now.getMonth());
  const date = String(Now.getDate());
  calander.innerText = `${year}년 ${month}월 ${date}일`;
  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

getClock();
setInterval(getClock, 1000);
