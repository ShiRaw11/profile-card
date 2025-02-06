function updateTime() {
  const dateElement = document.getElementById("current-date");
  const timeElement = document.getElementById("current-time");
  const now = new Date();

  const formattedDate = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  dateElement.textContent = formattedDate;
  timeElement.textContent = formattedTime;
}

window.onload = updateTime;

setInterval(updateTime, 1000);
