class Note {
  constructor(title, description, points, isBacklog, id, weekDay) {
    this.title = title ?? ""
    this.id = id ?? Math.floor(Math.random() * 10000) + 1
    this.description = description ?? ""
    this.points = points ?? 0
    this.isBacklog = isBacklog ?? true
    this.weekDay = weekDay ?? ""

    this._inscritos = [];
  }

  setDao(dao){
    this.dao = dao
  }

  setPoints(points){
    this.points = points
    this.dao.update(this)
    this.notify()
  }

  setDescription(description){
    this.description = description
    this.dao.update(this)
  }

  setTitle(title){
    this.title = title
    this.dao.update(this)
  }

  setIsBacklog(isBacklog){
    this.isBacklog = isBacklog

    console.log('this.dao')
    console.log(this.dao)
    
    this.dao.update(this)
  }

  setWeekDay(weekDay){
    this.weekDay = weekDay
    this.dao.update(this)
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  notify(){
    this._inscritos.forEach((func) => {
      func(this);
    });
  }
}

export default Note;