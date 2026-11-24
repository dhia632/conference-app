import { TestBed } from '@angular/core/testing';
import { ConferenceList } from './conference-list';

describe('ConferenceList', () => {
  function setup() {
    const fixture = TestBed.createComponent(ConferenceList);
    fixture.detectChanges();
    return { fixture, cmp: fixture.componentInstance, el: fixture.nativeElement as HTMLElement };
  }

  it('affiche les 3 conférences avec titres en majuscules et dates formatées', () => {
    const { el } = setup();
    const titles = Array.from(el.querySelectorAll('h3')).map((h) => h.textContent?.trim());
    expect(titles).toEqual(['ANGULAR 21 CONFERENCE', 'SIGNALS WORKSHOP', 'WEB CONFERENCE']);
    expect(el.textContent).toContain('15/11/2027');
  });

  it('colore les boutons selon les places restantes', () => {
    const { el } = setup();
    const btns = el.querySelectorAll('button.btn');
    expect(btns[0].classList).toContain('green');
    expect(btns[1].classList).toContain('orange');
    expect(btns[2].classList).toContain('red');
  });

  it('incrémente le nombre de participants à chaque clic', () => {
    const { fixture, cmp, el } = setup();
    (el.querySelectorAll('button.btn')[0] as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(cmp.conferences()[0].nbParticipants).toBe(76);
    expect(el.textContent).toContain('24');
  });

  it('ne dépasse jamais la capacité maximale', () => {
    const { cmp } = setup();
    cmp.register(3);
    expect(cmp.conferences()[2].nbParticipants).toBe(80);
  });

  it('filtre par titre et affiche un message si rien ne correspond', async () => {
    const { fixture, cmp, el } = setup();
    cmp.search.set('signals');
    fixture.detectChanges();
    expect(el.querySelectorAll('app-conference-card').length).toBe(1);
    cmp.search.set('zzz');
    fixture.detectChanges();
    expect(el.textContent).toContain('Aucune conférence ne correspond');
  });
});
