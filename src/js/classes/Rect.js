export default class Rect
{
  constructor(top, left, width, height, transformX = 0, transformY = 0) {
    this.top = top
    this.left = left
    this.width = width
    this.height = height
    this.transformX = transformX
    this.transformY = transformY
  }

  get bottom(){
    return this.top + this.height;
  }

  get right(){
    return this.left + this.width;
  }

  get originTop(){
    return this.top - this.transformY;
  }

  get originLeft(){
    return this.left - this.transformX;
  }

  get originBottom(){
    return this.originTop + this.height;
  }

  get originRight(){
    return this.originLeft + this.width;
  }

  getCenterRect(width, height){
    const center = {
      x: this.left + (this.width / 2),
      y: this.top + (this.height / 2),
    }

    return new Rect(
      center.y - (height / 2),
      center.x - (width / 2),
      width,
      height
    )
  }

  clone(){
    return new Rect(
      this.top,
      this.left,
      this.width,
      this.height,
      this.transformX,
      this.transformY
    )
  }

  transform(x, y){
    this.top = this.originTop + y;
    this.left = this.originLeft + x;
    this.transformX = x;
    this.transformY = y;
    return this;
  }

  contains(rect){
    const result = this.left <= rect.left
      &&
      this.right >= rect.right
      &&
      this.top <= rect.top
      &&
      this.bottom >= rect.bottom;
    return result
  }

  dump(){
    return {
      top: this.top,
      left: this.left,
      bottom: this.bottom,
      right: this.right,
      width: this.width,
      height: this.height,
      originTop: this.originTop,
      originLeft: this.originLeft,
      originBottom: this.originBottom,
      originRight: this.originRight,
      transformX: this.transformX,
      transformY: this.transformY,
    }
  }

  getRelativeRect(rect, position){
    switch(position){
      case 'right-bottom':
        return rect.clone().transform(
          this.left - rect.originLeft,
          this.bottom - rect.originTop
        )
      case 'left-bottom':
        return rect.clone().transform(
          this.right - rect.originRight,
          this.bottom - rect.originTop
        )
      case 'left-top':
        return rect.clone().transform(
          this.right - rect.originRight,
          this.top - rect.originBottom
        )
      case 'right-top':
        return rect.clone().transform(
          this.left - rect.originLeft,
          this.top - rect.originBottom
        )
      case 'center':
        const expectedRect = this.getCenterRect(rect.width, rect.height)
        return rect.clone().transform(
          expectedRect.left - rect.originLeft,
          expectedRect.top - rect.originTop
        )
      default:
        throw 'Illegal positionKey `' + position + '` is specified';
    }
  }
}

Rect.createWithElement = (elem, transformX = 0, transformY = 0) => {
  const boundingRect = elem.getBoundingClientRect();


  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  return new Rect(
    boundingRect.top + scrollTop - clientTop,
    boundingRect.left + scrollLeft - clientLeft,
    boundingRect.width,
    boundingRect.height,
    transformX,
    transformY
  )
}
