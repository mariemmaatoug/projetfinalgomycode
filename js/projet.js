
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?')) }}}}}
(function() {
const heart = document.getElementById('heart');
heart.addEventListener('click', function() {
heart.classList.toggle('red');
});
})();
(function() {
const heart = document.getElementById('heart1');
heart.addEventListener('click', function() {
heart.classList.toggle('red');
});
})();(function() {
const heart = document.getElementById('heart2');
heart.addEventListener('click', function() {
heart.classList.toggle('red');
});
})();(function() {
const heart = document.getElementById('heart3');
heart.addEventListener('click', function() {
heart.classList.toggle('red');
});
})();