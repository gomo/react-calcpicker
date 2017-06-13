class Global
{
  get currentCalclator(){
    return this._currentCalclator
  }

  set currentCalclator(value){
    this._currentCalclator = value
  }
}

const g = new Global()
export default g;
