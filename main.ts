/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program is cookie clicker
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let numberOfCookies = 0

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    numberOfCookies = numberOfCookies + 1
    basic.showNumber(numberOfCookies)

})

input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showNumber(numberOfCookies = 0)
    
})
