import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lektion7Component } from './lektion7.component';

describe('Lektion7Component', () => {
    let shoppingList: Lektion7Component;

    beforeEach(() => {
        // Skapa en ny instans av ShoppingList inför varje test.
        shoppingList = new Lektion7Component();
    });

    describe('addItem', () => {
        it('should add an item to the shopping list', () => {
            shoppingList.addItem('Apple');
            expect(shoppingList.contains('Apple')).toBeTrue();
        });
    });

    describe('removeItem', () => {
        it('should remove an item from the shopping list', () => {
            shoppingList.addItem('Banana');
            shoppingList.removeItem('Banana');
            expect(shoppingList.contains('Banana')).toBeFalse();
        });
    });

    describe('contains', () => {
        it('should check if an item is in the shopping list', () => {
            shoppingList.addItem('Milk');
            expect(shoppingList.contains('Milk')).toBeTrue();
            expect(shoppingList.contains('Bread')).toBeFalse();
        });
    });

    describe('countItems', () => {
        it('should return the number of items in the shopping list', () => {
            shoppingList.addItem('Eggs');
            shoppingList.addItem('Flour');
            expect(shoppingList.countItems()).toEqual(2);
        });
    });
});
