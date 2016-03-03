// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Вывод из глобального контекста модуля
console.log('From application global context');

module.exports = function() {
  // Вывод из контекста экспортируемой функции
  console.log('From application exported function');
};

util.log("util <3");

interval = setInterval(function() {
	console.log("One Big mac pls...");
}, 500);

setTimeout(function() {
	clearInterval(interval);
	console.log("That is all!");
}, 2500);
