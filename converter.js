( function() {
	// Percentages are calculated according to "國人膳食營養素參考攝取量" 
	// https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4248&pid=12285
  let nutritions = {
      '熱量': {
        name: 'calerios', 
        display: 'Calerios',
        unit: 'kcal',
        cal: null,
      },
      '粗脂肪': {
        name: 'fat',
        display: 'Fat',
        unit: 'g',
        cal: null,
      },
      '脂肪酸S總量': {
        name: 'saturated', 
        display: 'Saturated',
        unit: 'g',
        cal: function(val) { return val / 1000 },
      },
      '反式脂肪': {
        name: 'trans', 
        display: 'Trans',
        unit: 'g',
        cal: function(val) { return val / 1000 },
      },
      '脂肪酸P總量': {
        name: 'poly',
        display: 'Polyunsaturated',
        unit: 'g',
        cal: function(val) { return val / 1000 },
      },
      '脂肪酸M總量': {
        name: 'mono',
        display: 'Monounsaturated',
        unit: 'g',
        cal: function(val) { return val / 1000 },
      },
      '膽固醇': {
        name: 'cholesterol', 
        display: 'Cholesterol',
        unit: 'mg',
        cal: null,
      },
      '鈉': {
        name: 'sodium', 
        display: 'Sodium',
        unit: 'mg',
        cal: null,
      },
      '總碳水化合物': {
        name: 'carb', 
        display: 'Carbs',
        unit: 'g',
        cal: null,
      },
      '膳食纖維': {
        name: 'fiber',
        display: 'Fiber',
        unit: 'g',
        cal: null,
      },
      '糖質總量': {
        name: 'sugar', 
        display: 'Sugars',
        unit: 'g',
        cal: null,
      },
      '粗蛋白': {
        name: 'protein',
        display: 'Protein',
        unit: 'g',
        cal: null,
      },
      '維生素D總量(ug)': {
        name: 'vitaminD',
        display: 'Vitamin D',
        unit: '%',
        cal: function(val) { return val * 10 },
      },
      '鈣': {
        name: 'calcium',
        display: 'Calcium',
        unit: '%',
        cal: function(val) { return val / 10 },
      },
      '鐵': {
        name: 'iron',
        display: 'Iron',
        unit: '%',
        cal: function(val) { return val / 15 * 100 },
      },
      '鉀': {
        name: 'potassium',
        display: 'Potassium',
        unit: 'mg',
        cal: null,
      },
      '維生素A總量(IU)': {
        name: 'vitaminA',
        display: 'Vitamin A',
        unit: '%',
        cal: function(val) { return val * 0.3 / 5 },
      },
      '維生素C': {
        name: 'vitaminC',
        display: 'Vitamin C',
        unit: '%',
        cal: null,
      },
  }
  let nutritionZh = []
  let nutritionValues = {}
    
	initNutritionCalculation();

	function initNutritionCalculation() {
		if (document.domain !== 'consumer.fda.gov.tw') {
			window.alert('This script only works on https://consumer.fda.gov.tw/')
			return
		}

		for (const [key, obj] of Object.entries(nutritions)) {
			nutritionZh.push(key)
			nutritionValues[obj['name']] = 0
		}

		analyseNutritions()
		showResults()
	}

	function analyseNutritions() {
		const table = document.getElementsByClassName('rwd-table')

		$(table).find('tr:gt(0)').each(function() {
			let name = $(this).find('td:eq(1)').html()

			if (nutritionZh.indexOf(name) !== -1) {
				nutritionValues[nutritions[name]['name']] = parseFloat($(this).find('td:eq(3)').html())
			}
		})

		console.log(nutritionValues)
	}

	function showResults() {
		let result = ''

		for (const [key, value] of Object.entries(nutritionValues)) {
			let nutInfo = Object.values(nutritions).filter(nut => nut.name === key)[0]

			if (isNaN(value)) {
				result += `${nutInfo.display}: /\n`
			} else {
			result += `${nutInfo.display}: ${typeof nutInfo.cal === 'function' ? nutInfo.cal(value) : value} ${nutInfo.unit}\n`
			}
		}

		window.alert(result)
	}
})()
