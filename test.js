'use strict'

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve('result')
    }, 1000)
})

// promise.then навешивает обработчики на успешный результат или ошибку
promise.then(
    (result) => {
        // первая функция-обработчик - запустится при вызове resolve
        alert('Fulfilled: ' + result) // result - аргумент resolve
    },
    (error) => {
        // вторая функция - запустится при вызове reject
        alert('Rejected: ' + error) // error - аргумент reject
    },
)
