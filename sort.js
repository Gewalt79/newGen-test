// Список курсов
let courses = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Germany', prices: [500, null] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

//Функция сортировки по запросу юзера
function userSort(from, to) {
  let newarr = courses.filter((course) => course.prices[0] >= from && course.prices[1] <= to);
  console.log(newarr);
}

//Вызов функции сортировки с критериями
userSort(null, 200);
userSort(100, 350);
userSort(200, null);

//Функия сортировки по минимальной стоимости
function sortCourses() {
  courses.sort(function (a, b) {
    if (a.prices[0] === null) return -1;
    if (a.prices[0] > b.prices[0]) return 1;
    if (a.prices[0] < b.prices[0]) return -1;
    return 0;
  });
  console.log(courses);
}

//Вызов функции сортировки
sortCourses();