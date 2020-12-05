import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[];
  termino: string;
  // private todosHeroes: Heroe[];

  constructor(
    private heroesService: HeroesService,
    // private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      this.heroes = this.heroesService.buscarHeroes(p.termino);
      this.termino = p.termino;
    });
  }

  // verHeroe(idx: number): void {
  //   // this.todosHeroes = this.heroesService.getHeroes();
  //   // let i = 0;

  //   // for (const heroe of this.todosHeroes) {
  //   //   if (heroe.nombre === this.heroes[idx].nombre) {
  //   //     break;
  //   //   }
  //   //   i += 1;
  //   //   // console.log(`ha salido el numero ${i}`);
  //   // }

  //   this.router.navigate(['/heroe', idx]);
  // }
}
