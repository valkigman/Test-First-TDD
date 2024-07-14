import {assert} from 'chai';
import {multiplyAddn} from '../multiply_addn.js';

describe('Multiplying using Addition', function(){
    it('multiply should return product', function(){
        assert.equal(multiplyAddn(1,1), 1, '1x1 = 1');
    });
        it('multiply should return product', function(){
        assert.equal(multiplyAddn(2,2), 4, '2x2 = 4');
    });
        it('multiply should return product', function(){
        assert.equal(multiplyAddn(3,3), 9, '3x3 = 9');
    });
        it('multiply should return product', function(){
        assert.equal(multiplyAddn(23,45), 1035, '23x45 = 1035');
    });
});