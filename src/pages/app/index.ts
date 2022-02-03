import Page from '../../core/templates/page';
import MainPage from '../main/index';
import SettingsPage from '../settings';
import StatisticsPage from '../statistics';
import Header from '../../core/components/header';
import {ErrorPage, ErrorTypes} from '../error';

const enum PageIds{
  MainPage = 'main-page',
  SettingsPage = 'settings-page',
  StatisticsPage = 'statistics-page'
}

class App {
  private static container: HTMLElement = document.body
  private static defaultPageId: string = 'currentPage'
  private initialPage: MainPage
  private header: Header

  constructor(){
    this.initialPage = new MainPage('main-page')
    this.header = new Header('header', 'header')
  }

  static renderNewPage(idPage: string){
    const currentPageHtml = document.querySelector(`#${App.defaultPageId}`)
    if (currentPageHtml){
      currentPageHtml.remove()
    }

    // App.container.innerHTML = ''
    let page: Page | null = null


    switch (idPage) {
      case PageIds.MainPage:
        page = new MainPage(idPage)
        break;

      case PageIds.SettingsPage:
        page = new SettingsPage(idPage)
        break;

      case PageIds.StatisticsPage:
        page = new StatisticsPage(idPage)
        break;

        default: 
          page = new ErrorPage(idPage, ErrorTypes.ERROR_404)
    }

    if (page){
      const pageHtml = page.render()
      pageHtml.id = App.defaultPageId
      App.container.appendChild(pageHtml)
    }
  }

  private enableRouteChanges(){
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1)
      App.renderNewPage(hash)
    })
  }

  run(){
    App.container.appendChild(this.header.render())
    App.renderNewPage('settings-page')
    this.enableRouteChanges()
  }
}


export {App, PageIds} 