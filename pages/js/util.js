/*
 * This code is under the MIT License
 *
 * Copyright (c) 2016 Jaymes Winger
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

function add(a, b) {
  return a + b;
}

function sumList(list) {
  return list.reduce(add, 0);
}

function roll(sides, num = -1) {
  if(num <= 0) {
    return 1 + Math.floor(Math.random() * sides);
  } else {
    var result = [];
    for(var i = 0; i < num; i++) {
      result.push(1 + Math.floor(Math.random() * sides));
    }
    return result;
  }
}

function rollString(rolls, bonus) {
  if(rolls.length <= 1) {
    var total = parseInt(rolls) + bonus;
    return total + " (" + rolls + ")" + ((bonus != 0) ? (" + [" + bonus + "]") : "");
  } else {
    var total = sumList(rolls) + bonus;
    var result = total + " (";
    for(var i = 0; i < rolls.length; i++) {
      result += ((i > 0) ? ", " : "") + rolls[i];
    }
    result += ")" + ((bonus != 0) ? (" + [" + bonus + "]") : "");
    return result;
  }
}

function plusMinus(val, zeroes=false) {
  if(val < 0) {
    return val.toString();
  } else if(val == 0 && !zeroes) {
    return "None";
  } else {
    return "+" + val.toString();
  }
}

function getEl(name) {
  return document.getElementById(name);
}
