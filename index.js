const dev = ['EDVOLNVSDOEER', 'EOVOLEDSNDREV', 'DSEROOVVLEDNE', 'DOERLSENOVEDV', 'OREESNLVVODDE', 
'LEROOVESDVDEN', 'VODOLEENDSREV','DDOEVSEELNRVO', 'EOVOLEDSNDREV', 'ERVENSEODLDVO'
,'DODNESORVEVLE', 'DOERLSENOVEDV','RDVELNOOSEVDE', 'DSEROOVVLEDNE',  'OREESNLVVODDE', 
'DDOEVSEELNRVO', 'EDVOLNVSDOEER','VODOLEENDSREV', 'DESENVOLVEDOR']

const devText = document.getElementById('dev')

dev.forEach((item, index) => {
  const timer = setTimeout(() => {
    devText.innerText = item
    clearTimeout(timer)
  }, 40 * index)
})
