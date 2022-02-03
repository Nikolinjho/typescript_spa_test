import Page from '../../core/templates/page'

class SettingsPage extends Page {
  static textObject = {
    MainTitle: 'Settings Page'
  }

  constructor(id: string){
    super(id)
  }

  render(){
    const title = this.createHeaderTitle(SettingsPage.textObject.MainTitle)
    this.container.appendChild(title)
    return this.container
  } 
}

export default SettingsPage