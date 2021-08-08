'use strict';

let webStore = new Vue({
	el: '#app',
	data: {
		siteName: 'Сайт Vue.JS по книге VueJS в действии',
		product: {
			id: 1001,
			title: 'Еда для кошки, 25кг. большая упаковка',
			description: 'Большая упаковка 25кг <em>очень полезная</em>, органическая еда для вашего кота',
			price: 2000,
			priceFilter: '',
			image: 'images/product-fullsize.png'
		}
	},
	filters: {
		formatPrice(price) {	//#B
			if(!parseInt(price)) { return ""; }	//#C
			if(price > 99999) {	//#D
				let priceString = (price / 100).toFixed(2);	//#E
				let priceArray = priceString.split("").reverse();	//#F
				let index = 3;	//#F
				while (priceArray.length > index + 3) {	//#F
					priceArray.splice(index + 3, 0, ",");	//#F
					index += 4;	//#F
				}	//#F
				return "$" + priceArray.reverse().join("");	//#G
			} else {
				return "$" + (price / 100).toFixed(2);	//#H
			}
		}
	}
});