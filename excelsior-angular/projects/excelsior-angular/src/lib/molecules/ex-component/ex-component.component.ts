import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'lib-lib-component',
  template: '<ng-content></ng-content>',
  styleUrls: []
})
export class ExComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.injectSvgSprite();
  }

  private injectSvgSprite() {
    const svgUrl = 'assets/sprite.svg';
    fetch(svgUrl)
      .then(response => response.text())
      .then(svg => {
        const div = this.renderer.createElement('div');
        this.renderer.setProperty(div, 'innerHTML', svg);
        this.renderer.setStyle(div, 'display', 'none');
        document.body.appendChild(div);
      })
      .catch(error => console.error('Erro ao carregar o sprite SVG:', error));
  }
}
