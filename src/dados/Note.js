class Note {
  constructor(title, description, points, isBacklog, id, /*dao*/) {
    this.title = title ?? ""
    this.id = id ?? Math.floor(Math.random() * 10000) + 1
    this.description = description ?? ""
    this.points = points ?? 0
    this.isBacklog = isBacklog ?? true
  }

  setDao(dao){
    this.dao = dao
  }

  setPoints(points){
    this.points = points
    this.dao.update(this)
  }

  setDescription(description){
    this.description = description
    this.dao.update(this)
  }

  setTitle(title){
    this.title = title
    this.dao.update(this)
  }
}

export default Note;