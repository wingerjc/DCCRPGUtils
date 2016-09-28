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

function validateBonus() {
  var bonusEl = getEl("roll-bonus");
  if(!bonusEl.value.match(/^-?\d*$/)) {
    bonusEl.value = '0';
  }
}

function rollDice() {
  var rollBonus = parseInt(getEl("roll-bonus").value);
  var rollType = parseInt(getEl("roll-type").value);
  var rollCount = parseInt(getEl("roll-count").value);
  var dice = roll(rollType, rollCount);
  var result = rollString(dice, rollBonus);
  var outputEl = getEl("roll-output");
  outputEl.innerHTML = result + "\n" + outputEl.innerHTML; 
}

function selectText() {
  getEl("roll-output").select();
}

function clearText() {
  getEl("roll-output").innerHTML = "";
}
