
import './lib-flexible/flexible.debug';
import './lib-flexible/flexible_css.debug';

type StyleText = string;

interface StyleHandler {
  replaceColorInConentOfStyleLabel: (styleText: StyleText) => StyleText,
  changeThemesForAllStyleLabel: () => void,
  reset: () => void
}


class Px2Rem implements StyleHandler {
  ratio: number = 37.5

  constructor(config?: {
    ratio: number,
  }) {
    this.ratio = (config && config.ratio) || this.ratio;
  }

  reset = () => {
    const allStyles = document.getElementsByTagName('style');

    for (let i = 0; i < allStyles.length; i++) {
      const style = allStyles[i];
      style.removeAttribute('changeThemeDone');
    }
  }

  replaceColorInConentOfStyleLabel = (styleText: StyleText): StyleText => {
    return styleText.replace(/(\d+\.?\d+)px/gm, (a: any, b: number, c: any, d: string) => {
      return `${b / this.ratio}rem`;
    })
  }


  changeThemesForAllStyleLabel = () => {
    const allStyles = document.getElementsByTagName('style');

    for (let i = 0; i < allStyles.length; i++) {
      const style = allStyles[i];

      if (style.getAttribute('changeThemeDone')) {
        continue;
      }

      style.innerHTML = this.replaceColorInConentOfStyleLabel(style.innerHTML);
      style.setAttribute('changeThemeDone', 'done')
    }
  }

  applyNewTheme = () => {
    
    // @ts-ignore
    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {

      // ie
      window.setTimeout(this.changeThemesForAllStyleLabel);
    } else {
      document.addEventListener("DOMContentLoaded", this.changeThemesForAllStyleLabel);
    }
  }
}

export default Px2Rem;
