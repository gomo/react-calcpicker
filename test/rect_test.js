import Rect from '../src/js/classes/Rect'
import assert from 'power-assert'

describe('Rect', () => {
  it('getOverlappingRect', function () {
    const rect1 = new Rect(100, 100, 200, 200)

    let rect2 = new Rect(110, 110, 180, 180)
    let resultRect = rect1.getOverlappingRect(rect2)
    assert(resultRect.top == 110)
    assert(resultRect.bottom == 290)
    assert(resultRect.left == 110)
    assert(resultRect.right == 290)

    rect2 = new Rect(90, 90, 200, 200)
    resultRect = rect1.getOverlappingRect(rect2)
    assert(resultRect.top == 100)
    assert(resultRect.bottom == 290)
    assert(resultRect.left == 100)
    assert(resultRect.right == 290)

    rect2 = new Rect(110, 90, 200, 200)
    resultRect = rect1.getOverlappingRect(rect2)
    assert(resultRect.top == 110)
    assert(resultRect.bottom == 300)
    assert(resultRect.left == 100)
    assert(resultRect.right == 290)

    rect2 = new Rect(110, 110, 200, 200)
    resultRect = rect1.getOverlappingRect(rect2)
    assert(resultRect.top == 110)
    assert(resultRect.bottom == 300)
    assert(resultRect.left == 110)
    assert(resultRect.right == 300)

    rect2 = new Rect(90, 110, 200, 200)
    resultRect = rect1.getOverlappingRect(rect2)
    assert(resultRect.top == 100)
    assert(resultRect.bottom == 290)
    assert(resultRect.left == 110)
    assert(resultRect.right == 300)

    rect2 = new Rect(0, 0, 100, 100)
    resultRect = rect1.getOverlappingRect(rect2)
    assert(resultRect === null)
  })
})
