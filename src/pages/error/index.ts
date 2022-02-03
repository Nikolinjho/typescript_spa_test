import Page from '../../core/templates/page';

const enum ErrorTypes {
  ERROR_404 = 404,
}

class ErrorPage extends Page {
  private errorType: ErrorTypes | string;

  static TextObject: { [prop: string]: string } = {
    '404': 'Error. No page found',
  };

  constructor(id: string, errorType: ErrorTypes | string) {
    super(id);
    this.errorType = errorType;
  }

  render() {
    const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
    this.container.appendChild(title);
    return this.container;
  }
}

export {ErrorPage, ErrorTypes};
