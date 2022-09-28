function currentDateTime() {
  const curDate = new Date();
  return {
    date: curDate.toISOString().slice(0, 10),
    time: curDate.toISOString().slice(11, 19),
  };
}

module.exports = currentDateTime();
