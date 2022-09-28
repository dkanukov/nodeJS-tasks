function currentDateTime() {
  const curDate = new Date();
  return {
    date: `${curDate.getFullYear()}-${curDate.getMonth()}-${curDate.getDay()}`,
    time: `${curDate.getHours()}:${curDate.getMinutes()}:${curDate.getSeconds()}`,
  };
}

module.exports = currentDateTime();
