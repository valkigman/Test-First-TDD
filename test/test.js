// *Cycle 1*

// import {assert} from 'chai';

// describe('Multiplier', function(){
//     it('multiply should return product', function(){
//         assert.equal(multiply(1,1), 1);
//     });
// });


// *Cycle 1 (rectified)*

import {assert} from 'chai';
import {multiplyAddn} from '../multiply_addn.js';

describe('Multiplier', function(){
    it('multiply should return product', function(){
        assert.equal(multiplyAddn(1,1), 1, '1x1 = 1');
    });
        it('multiply should return product', function(){
        assert.equal(multiply(2,2), 4, '2x2 = 4');
    });
        it('multiply should return product', function(){
        assert.equal(multiply(3,3), 9, '3x3 = 9');
    });
        it('multiply should return product', function(){
        assert.equal(multiply(23,45), 1035, '23x45 = 1035');
    });
});



