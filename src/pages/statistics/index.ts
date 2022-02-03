import Page from "../../core/templates/page";

class StatisticsPage extends Page {
  static TextObject = {
    MainTitle: 'Stats'
  }

  constructor(id: string){
    super(id)
  }

  render(){
    const title = this.createHeaderTitle(StatisticsPage.TextObject.MainTitle)
    this.container.appendChild(title)
    return this.container
  }
}

export default StatisticsPage