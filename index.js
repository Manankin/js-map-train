// Завдання: 1
/**
 * Функція `createDictionary` створює словник на основі масиву пар ключ-значення.
 * entries - Масив, що містить пари ключ-значення.
 * Повертаємо - Створений словник (Map).
 */
function createDictionary(entries) {
  // Створення порожнього словника
  const newMap = new Map([]);
  // Використання методу forEach для перебору масиву пар ключ-значення
  // Додавання пари ключ-значення до словника за допомогою методу set
  entries.forEach(element => { 
    // console.log(element);
    newMap.set(element[0], element[1]);    
    }
  );
  return newMap;
}
// Приклад використання функції createDictionary
console.log("Завдання: 1 ==============================");
console.log(
  createDictionary([
    ["apple", "яблуко"],
    ["banana", "банан"],
    ["orange", "апельсин"],
  ])
);
// Виведе:
// Map(3) {
//   'apple' => 'яблуко',
//   'banana' => 'банан',
//   'orange' => 'апельсин'
// }


// Завдання: 2
/**
 * Функція `convertMapToObject` отримує словник (Map) та перетворює його в об'єкт.
 * Ключами об'єкту стають ключі словника, а значеннями об'єкту - значення відповідних ключів у словнику.
 * map - Словник, який потрібно перетворити.
 * Повертає - Об'єкт, що містить ключі та значення з вхідного словника.
 */
function convertMapToObject(map) {
  const result = {};
  // Перебираємо ключі та значення в словнику
  map.forEach((key, value) => {
    result[value] = key;  
  })
  // Додаємо ключ та значення до об'єкту
  // Повертаємо отриманий об'єкт
  return result
}
// Приклад використання функції convertMapToObject
console.log("Завдання: 2 ==============================");
let someMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);
console.log(convertMapToObject(someMap));
// Виведе: { name: 'John', age: 30, city: 'New York' }


// Завдання: 3
/**
 * Функція `setValue` встановлює значення для заданого ключа в словнику.
 * dictionary - Словник, в якому потрібно змінити значення.
 * key - Ключ, для якого потрібно встановити значення.
 * value - Нове значення, яке потрібно присвоїти ключу.
 */
function setValue(dictionary, key, value) {
  // Перевірка, чи існує вже ключ у словнику
  if (dictionary.has(key)) {
    // Якщо ключ вже існує, встановлюємо для нього нове значення в верхньому регістрі
    dictionary.set(key, value.toUpperCase())
  } else {
    // Якщо ключ не існує, додаємо нову пару ключ-значення до словника де значення буде таким же як ключ
    dictionary.set(key, value.toUpperCase())
  }
  return dictionary;
}
// Приклад використання функції setValue
console.log("Завдання: 3 ==============================");
// Встановлення нового значення для ключа "banana"
console.log(
  setValue(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
    ]),
    "banana",
    "новий банан"
  )
);
// Виведе:
// Map(3) {
//   'apple' => 'яблуко',
//   'banana' => 'новий банан',
//   'orange' => 'апельсин'
// }


// Завдання: 4
/**
 * Функція `deleteKey` видаляє ключ та відповідне йому значення зі словника.
 * dictionary - Словник, з якого потрібно видалити ключ.
 * key - Ключ, який потрібно видалити.
 * Повертаємо - true, якщо ключ був успішно видалений, або false, якщо ключ не знайдено.
 */
function deleteKey(dictionary, key) {
  // Перевірка, чи існує ключ у словнику
  if (dictionary.has(key)) {
    // Якщо ключ існує, видаляємо його та відповідне значення
    return dictionary.delete(key);
  } else {
    // Якщо ключ не знайдено, повертаємо false
    return false
  }
}
// Приклад використання функції deleteKey
console.log("Завдання: 4 ==============================");
console.log(
  deleteKey(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
    ]),
    "banana"
  )
);
// true


// Завдання: 5
/**
 * Функція `getKeysStartingWith` повертає масив ключів словника, які починаються з заданої букви.
 * dictionary - Словник, ключі якого перевіряються.
 * letter - Буква, з якої мають починатися ключі.
 * Повертаємо - Масив ключів, які починаються з заданої букви.
 */
function getKeysStartingWith(dictionary, letter) {
  // Оголошення порожнього масиву для збереження ключів
  let result = [];
  // Перебір ключів словника за допомогою циклу for...of
  for (const [key, value] of dictionary) {
    // console.log(key);
  // Перевірка, чи ключ починається з заданої букви
    if (key.substr(0, 1) === letter) {
      // Якщо ключ починається з заданої букви, додаємо його до масиву
      result.push(key);
    }
  }
  // Повертаємо масив
  return result
}
// Приклад використання функції getKeysStartingWith
console.log("Завдання: 5 ==============================");
// Отримання ключів, які починаються з букви "g"
console.log(
  getKeysStartingWith(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
      ["grape", "виноград"],
      ["pear", "груша"],
    ]),
    "g"
  )
);
// Виведе: [ 'grape' ]


// Завдання: 6
/**
 * Функція `addKeyValuePairs` додає пари ключ-значення до словника з перевіркою на унікальність ключа.
 * Вона також веде статистику доданих та відхилених ключів.
 * dictionary - Словник, в який потрібно додати пари.
 * entries - Масив пар ключ-значення, які потрібно додати.
 * Повертаємо - Об'єкт, що містить змінений словник, кількість доданих та відхилених ключів.
 */
function addKeyValuePairs(dictionary, entries) {
  // Ведемо статистику доданих та відхилених ключів, для цього створемо змінні added та rejected з початковими значеннями 0
  let added = 0;
  let rejected = 0;
  // Використовуємо метод forEach для перебору масиву пар ключ-значення
  entries.forEach((item) => {
    // Перевіряємо, чи словник вже містить такий ключ за допомогою методу has
    if (dictionary.has(item[0])) {
      // Якщо ключ не є унікальним, збільшимо rejected на 1
      rejected += 1;
    } else {
      // Якщо ключ є унікальним, додаємо його до словника за допомогою методу set та збільшимо added на 1
      added += 1;
      dictionary.set(item[0], item[1]);
    }
  })
  // Повертаємо об'єкт з dictionary, added, rejected
  return {dictionary, added, rejected}
}
console.log("Завдання: 6 ==============================");
console.log(
  addKeyValuePairs(
    new Map([
      ["user1", { name: "John", age: 24 }],
      ["user2", { name: "Emma", age: 28 }],
    ]),
    [
      ["user3", { name: "Bob", age: 33 }],
      ["user2", { name: "Alice", age: 25 }],
    ]
  )
);
// Виведе: {
//   dictionary: Map(3)
//   { 'user1' => { name: 'John', age: 24 },
//   'user2' => { name: 'Emma', age: 28 },
//   'user3' => { name: 'Bob', age: 33 } },
//   added: 1,
//   rejected: 1
// }


// Завдання: 7
/**
 * Функція `transformDictionary` перетворює словник в об'єкт, який містить масиви ключів, значень і пар ключ-значення.
 * dictionary - Словник, який потрібно перетворити.
 * Повертаємо - Об'єкт, який містить масиви ключів, значень і пар ключ-значення.
 */
function transformDictionary(dictionary) {
  // Створюємо порожні масиви для ключів (змінна keys), значень (змінна values) і пар ключ-значення (змінна entries)
  let keys = new Array;
  let values = new Array;
  let entries = new Array;
  // Використовуємо цикл for...of і метод keys для перебору ключів словника
  for (const [key, value] of dictionary) {
    // Додаємо кожен ключ до масиву keys за допомогою методу push
    keys.push(key);
    // Додаємо кожне значення до масиву values за допомогою методу push
    values.push(value);
    // Додаємо кожну пару ключ-значення до масиву entries за допомогою методу push
    entries.push([key, value]);
    // console.log(keys); console.log(values);
  }
  // Використовуємо цикл for...of і метод values для перебору значень словника
  // Використовуємо цикл for...of і метод entries для перебору пар ключ-значення словника
  // Повертаємо об'єкт, який містить масиви ключів (властивість keys), значень (властивість values) і пар ключ-значення (властивість entries)
  return {keys, values, entries}
}
console.log("Завдання: 7 ==============================");
console.log(
  transformDictionary(
    new Map([
      ["car", "автомобіль"],
      ["bus", "автобус"],
      ["bicycle", "велосипед"],
    ])
  )
);
// Виведе: {
//    keys: [ 'car', 'bus', 'bicycle' ],
//    values: [ 'автомобіль', 'автобус', 'велосипед' ],
//    entries: [
//     [ 'car', 'автомобіль' ],
//     [ 'bus', 'автобус' ],
//     [ 'bicycle', 'велосипед' ]
//   ]
// }


// Завдання: 8
/**
 * Функція `checkPresence` перевіряє наявність заданих ключів у словнику.
 * dictionary - Словник, в якому перевіряємо ключі.
 * keys - Масив ключів, які перевіряємо.
 * Повертаємо - Масив булевих значень: true, якщо ключ присутній у словнику, та false, якщо ключ відсутній.
 */
function checkPresence(dictionary, keys) {
  // Створюємо порожній масив для збереження результатів перевірки
  let result = [];
  // Використовуємо цикл forEach для перебору масиву ключів
  keys.forEach((key) => result.push(dictionary.has(key)))
  // Додаємо результат перевірки (true або false) до масиву presence при наявності ключа у словнику
  // Повертаємо масив
  return result;
}
console.log("Завдання: 8 ==============================");
console.log(
  checkPresence(
    new Map([
      ["car", "автомобіль"],
      ["chair", "стілець"],
      ["computer", "комп'ютер"],
    ]),
    ["car", "book", "chair"]
  )
);
// Виведе: [true, false, true]


// Завдання: 9
/*
 * Функція `getFilteredDictionarySize` повертає кількість елементів в словнику, значення яких відповідають заданому фільтру.
 * dictionary - Словник, розмір якого потрібно отримати.
 * filter - Фільтрувальна функція. Ця функція приймає пару ключ-значення та повертає true, якщо пара відповідає фільтру, або false в іншому випадку.
 * Повертаємо - Розмір фільтрованого словника.
 */
function getFilteredDictionarySize(dictionary, filter) {
  // Створюємо новий Map об'єкт для зберігання елементів, що відповідають фільтру
  let newDict = new Map;
  // Використовуємо for...of цикл разом з методом entries() для перебору пар [ключ, значення] словника
  for (const [key, value] of dictionary) {
    if (filter(key, value)) {
      // Якщо пара [ключ, значення] відповідає фільтру, додаємо її до фільтрованого словника
      newDict.set([key, value]);
    }
  }
  // Повертаємо розмір фільтрованого словника, використовуючи властивість size
  // console.log(newDict);
  return newDict.size;
}
console.log("Завдання: 9 ==============================");
console.log(
  getFilteredDictionarySize(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    (key, value) => value > 1000000
  )
);
// Виведе: 2, оскільки лише два міста мають населення більше ніж 1 мільйон


// Завдання: 10
/**
 * Функція `sortByValues` сортує словник за значеннями від найбільшого до найменшого.
 * dictionary - Словник, який потрібно відсортувати.
 * Повертаємо - Відсортований словник.
 */
function sortByValues(dictionary) {
  // Конвертуємо словник в масив пар ключ-значення за допомогою оператора деструктурізації
  let array = [];
  dictionary.forEach((value, key) => array.push([key, value]))
  // console.log(array);
  // Сортуємо масив пар ключ-значення за значеннями в порядку спадання
  array.sort((a, b) => b[1] - a[1]);
  // console.log(array);
  // Конвертуємо відсортований масив пар ключ-значення назад у словник
  dictionary = new Map(array);
  return dictionary;
}
console.log("Завдання: 10 ==============================");
console.log(
  sortByValues(
    new Map([
      ["Harry Potter and the Philosopher's Stone", 120000000],
      ["The Little Prince", 200000000],
      ["The Hobbit", 100000000],
      ["And Then There Were None", 100000000],
      ["Dream of the Red Chamber", 100000000],
    ])
  )
);
// Виведе: Map {
// 'The Little Prince' => 200000000,
// 'Harry Potter and the Philosopher's Stone' => 120000000,
// 'The Hobbit' => 100000000,
// 'And Then There Were None' => 100000000,
// 'Dream of the Red Chamber' => 100000000 }


// Завдання: 11
/**
 * Функція `resetDictionary` перевіряє кількість елементів у словнику, та якщо вона більша ніж задана, очищує словник.
 * dictionary - Словник, який потрібно перевірити та можливо очистити.
 * maxSize - Максимально допустима кількість елементів у словнику.
 * Повертаємо - true, якщо словник був очищений, або false в іншому випадку.
 */
function resetDictionary(dictionary, maxSize) {
  // Використовуємо метод size для перевірки кількості елементів у словнику
  // Якщо кількість елементів більша ніж максимально допустима, очищуємо словник за допомогою методу clear
  if (maxSize <= dictionary.size) {
    // Повертаємо true, оскільки словник був очищений
    dictionary.clear();
    return true    
  } else {
    // Повертаємо false, оскільки кількість елементів не перевищує максимально допустиму, тому словник не був очищений
    return false
  }
}
console.log("Завдання: 11 ==============================");
console.log(
  resetDictionary(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    3
  )
);
// Виведе: true, оскільки у словнику було 5 елементів, що більше ніж maxSize = 3


// Завдання: 12
/**
 * Функція `convertDictionaryToSet` отримує словник та перетворює його в множину.
 * Значенням множини є ключі словника, де рядкові ключі переводяться в верхній регістр,
 * а числові ключі збільшуються на 1.
 * dictionary - Словник, який потрібно перетворити.
 * Повертає - Множину, яка містить ключі словника в модифікованому вигляді.
 */
function convertDictionaryToSet(dictionary) {
  let result = new Set;
  // Перебираємо ключі словника
  for (const [key, value] of dictionary) {
    switch (typeof key) {
      // Якщо ключ є числом, збільшуємо його на 1 і додаємо до множини
      case 'number' : result.add(key + 1);
        break;
      // Якщо ключ є рядком, переводимо його в верхній регістр і додаємо до множини
      case 'string' : result.add(key.toUpperCase());
        break;
      default: return false;
    }
  }
  // Повертаємо отриману множину
  return result
}

// Приклад використання функції convertDictionaryToSet
console.log("Завдання: 12 ==============================");
let mixedDictionary = new Map([
  ["apple", "red"],
  ["banana", "yellow"],
  [1, "one"],
  [2, "two"],
]);
console.log(convertDictionaryToSet(mixedDictionary));
// Виведе: Set { 'APPLE', 'BANANA', 2, 3 }


// Завдання: 13
/**
 * Функція `convertSetToDictionary` отримує множину та перетворює її в словник.
 * Ключами словника стають елементи множини, а значеннями - коди перших символів цих елементів.
 * set - Множина, яку потрібно перетворити.
 * Повертає - Словник, який містить елементи множини як ключі та їх коди перших символів як значення.
 */
function convertSetToDictionary(set) {
  let newMap = new Map;
  // let key, value;
  // Перебираємо елементи множини
  set.forEach((item) => {
    // key = item;
    // value = item.charCodeAt(0);
    // console.log(key, value);
    // Додаємо елемент в словник з ключем, який дорівнює елементу, та значенням, яке дорівнює коду його першого символу
    newMap.set(item, item.charCodeAt(0));
  })
  // Повертаємо отриманий словник
  return newMap;
}

// Приклад використання функції convertSetToDictionary
console.log("Завдання: 13 ==============================");
let someSet = new Set(["apple", "banana", "1", "2"]);
console.log(convertSetToDictionary(someSet));
// Виведе: Map { 'apple' => 97, 'banana' => 98, '1' => 49, '2' => 50 }
