main()

async function main () {
  const sheet = 'https://api.steinhq.com/v1/storages/5d3292fb490adc53ef5c2f73/entries'
  const response = await fetch(sheet)
  const entries = await response.json()
  console.log(entries)

  const app = new Vue({
    el: '#app',
    data: {
      entries
    }
  })
}