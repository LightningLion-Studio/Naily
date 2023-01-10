module.exports = (nai, control) => {
  for (let i = 0; i < control.length; i++) {
    nai.naiApp.use(control[i])
  }
}
