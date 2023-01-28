---
slug: lodash-intro
title: Lodash常用速查
authors: [guying]
tags: [lodash]
---

## shuffle

使用# Fisher–Yates洗牌算法创建一个随机数组。

```javascript
import shuffle from 'lodash/shuffle';
const result = shuffle([1, 2, 3, 4, 5]);
// result => [2, 5, 1, 4, 3]
```

## orderBy

创建一个元素数组，按指定顺序排序。

此方法类似于_.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 
否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。

```javascript
import orderBy from 'lodash/orderBy';

const items = [
  { name: 'Item A', price: 2 },
  { name: 'Item B', price: 8 },
  { name: 'Item C', price: 4 },
  { name: 'Item D', price: 4 }
];

const result = orderBy(items, ['price', 'name'], ['desc', 'asc']);

/*
result => [
  { name: 'Item B', price: 8 },
  { name: 'Item C', price: 4 },
  { name: 'Item D', price: 4 },
  { name: 'Item A', price: 2 }
]
*/
```

## chunk

创建一个数组，元素为将其拆分为指定大小的子数组（如果数组不能均匀拆分，则最后的子数组将只包含剩余的元素）。


```javascript
import chunk from 'lodash/chunk';
const array = [ 1, 2, 3, 4 ];
const result = chunk(array, 2);
// result => [[1, 2], [3, 4]]
```

## take

创建数组的一个切片，从开头处取指定数目的元素。


```javascript
import take from 'lodash/take';
const result = take([1, 2, 3], 2);
// result => [1, 2]
```


## difference

创建不包含在其他给定数组的元素的数组。结果数组元素的顺序由第一个数组决定。

```javascript
import difference from 'lodash/difference';
const result = difference([1, 2, 3], [2, 3, 4]);
// result => [1]
```

## intersection

创建所有给定数组都包含的元素的数组。结果数组元素的顺序由第一个数组决定。

```javascript
import intersection from 'lodash/intersection';
const result = intersection([1, 2, 3], [2, 3, 4]);
// result => [2, 3]
```

## isEmpty

检查值是否为空对象、集合、映射或集合。

```javascript
import isEmpty from 'lodash/isEmpty';
isEmpty({});
// => true
isEmpty({ name: 'John Doe' });
// => false
```

## throttle（节流）

创建一个函数，该函数在每个间隔（以毫秒为单位）最多调用一次传递的函数。

```javascript
import throttle from 'lodash/throttle';
const throttled = throttle(() => {
    console.log('Throttled after 50ms!');
}, 50);

window.addEventListener('resize', throttled);
```

## debounce(防抖)

创建一个函数，该函数将延迟调用传递的函数，直到上次调用函数经过了指定的时间间隔。

```javascript
import debounce from 'lodash/debounce';
const debounced = debounce(() => {
    console.log('Debounced after 400ms!');
}, 400);

window.addEventListener('resize', debounced);
```


## cloneDeep

深克隆一个给定的值。

```javascript
import cloneDeep from 'lodash/cloneDeep';

const items = [
{ name: 'Item A' },
{ name: 'Item B' },
];
const result = cloneDeep(items);
// result[0] === items[0] => false
```

## defaults

分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。

```javascript
_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```