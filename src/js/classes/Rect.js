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
      case Rect.RIGHT_BOTTOM:
        return rect.clone().transform(
          this.left - rect.originLeft,
          this.bottom - rect.originTop
        )
      case Rect.LEFT_BOTTOM:
        return rect.clone().transform(
          this.right - rect.originRight,
          this.bottom - rect.originTop
        )
      case Rect.LEFT_TOP:
        return rect.clone().transform(
          this.right - rect.originRight,
          this.top - rect.originBottom
        )
      case Rect.RIGHT_TOP:
        return rect.clone().transform(
          this.left - rect.originLeft,
          this.top - rect.originBottom
        )
      case Rect.CENTER:
        const expectedRect = this.getCenterRect(rect.width, rect.height)
        return rect.clone().transform(
          expectedRect.left - rect.originLeft,
          expectedRect.top - rect.originTop
        )
      default:
        throw 'Illegal positionKey `' + position + '` is specified';
    }
  }

  getOverlappingRect(rect){
    const top = Math.max(this.top, rect.top)
    const left = Math.max(this.left, rect.left)
    const right = Math.min(this.right, rect.right);
    const bottom = Math.min(this.bottom, rect.bottom);

    var width = right - left;
    var height = bottom - top;
    if (width > 0 && height > 0) {
        return new Rect(top, left, width, height);
    } else {
        return null;
    }
  }
}

Rect.createWithElement = (elem, transformX = 0, transformY = 0) => {
  if(!elem){
    return new Rect(0,0,0,0)
  }
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

Rect.createWithWindow = () => {
  return new Rect(
    window.pageYOffset || document.documentElement.scrollTop,
    window.pageXOffset || document.documentElement.scrollLeft,
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
  )
}

Object.defineProperty(Rect, 'RIGHT_TOP', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "RIGHT_TOP"
});

Object.defineProperty(Rect, 'LEFT_TOP', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "LEFT_TOP"
});

Object.defineProperty(Rect, 'RIGHT_BOTTOM', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "RIGHT_BOTTOM"
});

Object.defineProperty(Rect, 'LEFT_BOTTOM', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "LEFT_BOTTOM"
});

Object.defineProperty(Rect, 'CENTER', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "CENTER"
});
