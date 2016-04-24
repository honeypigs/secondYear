	var zeroesForeverIterator = {
		[Symbol.iterator] : function () {
			console.log(this);
			return this;
		},
		next : function () {
			return {done : false , value : 0};
		}
	};
	console.log(zeroesForeverIterator);