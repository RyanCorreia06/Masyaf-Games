import { Injectable } from '@angular/core';
import { Produto } from '../cesta/cesta-service';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  produtos: Produto[] = [
  
  { id: 1, nome: 'Batman: Arkham Asylum', preco: 79.9, imagem: '/PS3/Batman-Arkham-Asylum.jpg', descricao: 'Batman: Arkham Asylum acompanha o Cavaleiro das Trevas levando o Coringa capturado de volta ao Asilo Arkham, mas a aparente facilidade da rendição revela-se uma armadilha.', plataforma: 'PS3' },
  { id: 2, nome: 'Battlefield: Bad Company 2', preco: 69.9, imagem: '/PS3/Battlefield-Bad-Company-2.jpg', descricao: 'Tiro em primeira pessoa com cenários totalmente destrutíveis.', plataforma: 'PS3' },
  { id: 3, nome: 'Bayonetta', preco: 89.9, imagem: '/PS3/Bayonetta.jpg', descricao: 'Ação estilosa com combos frenéticos.', plataforma: 'PS3' },
  { id: 4, nome: 'Bioshock', preco: 59.9, imagem: '/PS3/Bioshock.jpg', descricao: 'Explore a cidade submersa de Rapture.', plataforma: 'PS3' },
  { id: 5, nome: 'Bioshock 2', preco: 64.9, imagem: '/PS3/BioShock-2.jpg', descricao: 'A saga de Rapture continua.', plataforma: 'PS3' },
  { id: 6, nome: 'Borderlands', preco: 54.9, imagem: '/PS3/BorderLands.jpg', descricao: 'RPG de tiro cooperativo com humor peculiar.', plataforma: 'PS3' },
  { id: 7, nome: 'Dead Space', preco: 74.9, imagem: '/PS3/DeadSpace.jpg', descricao: 'Terror e sobrevivência no espaço.', plataforma: 'PS3' },
  { id: 8, nome: 'Final Fantasy XIII', preco: 99.9, imagem: '/PS3/FinalFantasy.jpg', descricao: 'RPG épico com gráficos deslumbrantes.', plataforma: 'PS3' },
  { id: 9, nome: 'God of War III', preco: 119.9, imagem: '/PS3/God-of-War-3.jpg', descricao: 'Kratos enfrenta os deuses do Olimpo.', plataforma: 'PS3' },
  { id: 10, nome: 'Gran Turismo 5', preco: 84.9, imagem: '/PS3/GranTurismo.jpg', descricao: 'O simulador de corrida mais completo do PS3.', plataforma: 'PS3' },
  { id: 11, nome: 'Infamous', preco: 69.9, imagem: '/PS3/infamous-box-art.png', descricao: 'Poderes elétricos em uma cidade em quarentena.', plataforma: 'PS3' },
  { id: 12, nome: 'Killzone 2', preco: 64.9, imagem: '/PS3/Killzone2.jpg', descricao: 'FPS de guerra futurista contra os Helghast.', plataforma: 'PS3' },
  { id: 13, nome: 'MAG', preco: 49.9, imagem: '/PS3/MAG.jpg', descricao: 'Batalhas massivas de até 256 jogadores.', plataforma: 'PS3' },
  { id: 14, nome: 'Metal Gear Solid 4', preco: 109.9, imagem: '/PS3/MetalGearSolid.jpg', descricao: 'Snake enfrenta sua última missão.', plataforma: 'PS3' },
  { id: 15, nome: 'Motorstorm', preco: 44.9, imagem: '/PS3/Motorstorm.jpg', descricao: 'Corridas off-road brutais e insanas.', plataforma: 'PS3' },
  { id: 16, nome: 'Ratchet & Clank Future', preco: 59.9, imagem: '/PS3/Ratchet.jpg', descricao: 'Plataforma e armas malucas em outra galáxia.', plataforma: 'PS3' },
  { id: 17, nome: 'Red Dead Redemption', preco: 129.9, imagem: '/PS3/RedDeadps3.jpg', descricao: 'Faroeste de mundo aberto premiado.', plataforma: 'PS3' },
  { id: 18, nome: 'The Last of Us', preco: 149.9, imagem: '/PS3/The-Last-of-Us.jpg', descricao: 'Sobrevivência emocional em um mundo pós-apocalíptico.', plataforma: 'PS3' },
  { id: 19, nome: 'Uncharted 2: Among Thieves', preco: 94.9, imagem: '/PS3/Uncharted2.jpg', descricao: 'Aventura cinematográfica de Nathan Drake.', plataforma: 'PS3' },

  // ===== XBOX 360 =====
  { id: 20, nome: "Assassin's Creed(Xbox 360)", preco: 79.9, imagem: '/XBOX-360/Assassin39s-Creed-300x421.jpg', descricao: 'A origem da saga de Altaïr, o Assassino.', plataforma: 'Xbox360' },
  { id: 21, nome: "Assassin's Creed Rogue(Xbox 360)", preco: 89.9, imagem: '/XBOX-360/Assassins-Creed®-Rogue-xbox-360-300x380.png', descricao: 'Viva do outro lado da guerra entre Templários e Assassinos.', plataforma: 'Xbox360' },
  { id: 22, nome: "Assassin's Creed Brotherhood(Xbox 360)", preco: 84.9, imagem: '/XBOX-360/assassins-creed-brotherhood-xbox-360-300x421.jpeg', descricao: 'Ezio constrói sua irmandade em Roma.', plataforma: 'Xbox360' },
  { id: 23, nome: "Assassin's Creed Revelations(Xbox 360)", preco: 84.9, imagem: '/XBOX-360/assassins-creed-revelations-xbox-360-300x424.jpg', descricao: 'O fim da jornada de Ezio Auditore.', plataforma: 'Xbox360' },
  { id: 24, nome: "Asura's Wrath(Xbox 360)", preco: 69.9, imagem: '/XBOX-360/asuras-wrath-xbox-360-300x385.png', descricao: 'Ação frenética inspirada em anime.', plataforma: 'Xbox360' },
  { id: 25, nome: 'Batman: Arkham Origins(Xbox 360)', preco: 74.9, imagem: '/XBOX-360/Batman-Arkham-Origins-300x422.jpg', descricao: 'Um jovem Batman enfrenta oito assassinos em uma noite.', plataforma: 'Xbox360' },
  { id: 26, nome: 'Call of Duty: Ghosts(Xbox 360)', preco: 79.9, imagem: '/XBOX-360/Call-of-Duty-Ghosts-300x430.jpg', descricao: 'Uma nova facção surge após a queda dos EUA.', plataforma: 'Xbox360' },
  { id: 27, nome: 'Call of Duty: Modern Warfare 2(Xbox 360)', preco: 89.9, imagem: '/XBOX-360/Call-of-Duty-Modern-Warfare-2-300x421.jpg', descricao: 'Um dos FPS mais icônicos da geração.', plataforma: 'Xbox360' },
  { id: 28, nome: "Dante's Inferno(Xbox 360)", preco: 54.9, imagem: '/XBOX-360/Dantes-Inferno™-xbox-360-300x426.jpg', descricao: 'Dante atravessa os nove círculos do Inferno.', plataforma: 'Xbox360' },
  { id: 29, nome: 'Far Cry 3(Xbox 360)', preco: 79.9, imagem: '/XBOX-360/Far-Cry-3-300x421.jpg', descricao: 'Sobrevivência em uma ilha tropical tomada por piratas.', plataforma: 'Xbox360' },
  { id: 30, nome: 'Forza Horizon(Xbox 360)', preco: 94.9, imagem: '/XBOX-360/Forza-Horizon.jpg', descricao: 'Corridas em mundo aberto em um festival automotivo.', plataforma: 'Xbox360' },
  { id: 31, nome: 'Forza Horizon 2(Xbox 360)', preco: 99.9, imagem: '/XBOX-360/Forza-Horizon-2.jpg', descricao: 'A festa das corridas continua pela Europa.', plataforma: 'Xbox360' },
  { id: 32, nome: 'Grand Theft Auto V(Xbox 360)', preco: 129.9, imagem: '/XBOX-360/GTAV.png', descricao: 'Três criminosos, uma cidade, infinitas possibilidades.', plataforma: 'Xbox360' },
  { id: 33, nome: 'Max Payne 3(Xbox 360)', preco: 69.9, imagem: '/XBOX-360/Max-Payne-3-300x420.jpg', descricao: 'Ação em câmera lenta em São Paulo.', plataforma: 'Xbox360' },
  { id: 34, nome: 'Metal Gear Solid V: The Phantom Pain(Xbox 360)', preco: 109.9, imagem: '/XBOX-360/Metal-Gear-Solid-V-The-Phantom-Pain-300x425.jpg', descricao: 'Big Boss busca vingança em mundo aberto.', plataforma: 'Xbox360' },
  { id: 35, nome: 'Minecraft: Xbox 360 Edition', preco: 49.9, imagem: '/XBOX-360/Minecraft-Xbox-360-Edition.jpg', descricao: 'Construa, explore e sobreviva em mundos infinitos.', plataforma: 'Xbox360' },

  { id: 37, nome: 'Resident Evil 4 HD', preco: 59.9, imagem: '/XBOX-360/Resident-Evil-4-HD.jpg', descricao: 'O clássico de terror e ação remasterizado.', plataforma: 'Xbox360' },
  { id: 38, nome: 'Resident Evil 5: Gold Edition', preco: 64.9, imagem: '/XBOX-360/Resident-Evil-5-Gold-Edition-300x423.jpg', descricao: 'Chris Redfield enfrenta o horror na África.', plataforma: 'Xbox360' },
  { id: 39, nome: 'Resident Evil 6: Archives', preco: 64.9, imagem: '/XBOX-360/Resident-Evil-6-Archives-300x424.jpg', descricao: 'Quatro campanhas entrelaçadas de terror.', plataforma: 'Xbox360' },
  { id: 40, nome: 'Rise of the Tomb Raider', preco: 99.9, imagem: '/XBOX-360/Rise-of-the-Tomb-Raider-300x425.jpg', descricao: 'Lara Croft em busca da cidade perdida.', plataforma: 'Xbox360' },
  { id: 41, nome: 'Sonic Unleashed', preco: 49.9, imagem: '/XBOX-360/Sonic-Unleashed.jpg', descricao: 'Sonic enfrenta uma nova transformação sombria.', plataforma: 'Xbox360' },
  { id: 42, nome: 'Watch Dogs', preco: 89.9, imagem: '/XBOX-360/Watch_Dogs-300x423.jpg', descricao: 'Hackeie Chicago inteira com seu smartphone.', plataforma: 'Xbox360' },

  // ===== NINTENDO =====
  { id: 43, nome: 'Luigi\'s Mansion 3', preco: 199.9, imagem: '/NINTENDO/luigis-mansion-3.jpg', descricao: 'Luigi caça fantasmas em um hotel assombrado.', plataforma: 'Nintendo' },
  { id: 44, nome: 'Cuphead', preco: 89.9, imagem: '/NINTENDO/cuphead.jpg', descricao: 'Plataforma e chefes desafiadores em estilo cartoon anos 30.', plataforma: 'Nintendo' },
  { id: 45, nome: 'Ori: The Collection', preco: 149.9, imagem: '/NINTENDO/ori-the-collection.jpg', descricao: 'A jornada emocionante de Ori em dois jogos.', plataforma: 'Nintendo' },
  { id: 46, nome: 'Mario vs. Donkey Kong', preco: 219.9, imagem: '/NINTENDO/mario-vs-donkey-kong.jpg', descricao: 'Quebra-cabeças e plataforma clássicos da Nintendo.', plataforma: 'Nintendo' },
  { id: 47, nome: 'Mortal Kombat 1', preco: 299.9, imagem: '/NINTENDO/mortal-kombat-1.jpg', descricao: 'A saga é reiniciada com fatalities brutais.', plataforma: 'Nintendo' },
  { id: 48, nome: 'Pokémon Shield', preco: 249.9, imagem: '/NINTENDO/pokemon-shield.jpg', descricao: 'Explore a região de Galar e capture Pokémon.', plataforma: 'Nintendo' },
  { id: 49, nome: 'Metroid Prime 4: Beyond', preco: 279.9, imagem: '/NINTENDO/metroid-prime-4.jpg', descricao: 'Samus retorna em uma nova aventura espacial.', plataforma: 'Nintendo' },
    // ===== XBOX ONE =====
  { id: 53, nome: "Assassin's Creed Origins", preco: 89.9, imagem: "/XBOX-ONE/assassinsorigins.jpg", descricao: 'Bayek explora o Egito Antigo em busca de vingança.', plataforma: 'XboxOne' },
  { id: 54, nome: "Assassin's Creed Odyssey", preco: 94.9, imagem: '/XBOX-ONE/assassinsodyssey.jpg', descricao: 'Torne-se um mercenário espartano na Grécia Antiga.', plataforma: 'XboxOne' },
  { id: 55, nome: 'A Way Out', preco: 79.9, imagem: '/XBOX-ONE/awayout.jpg', descricao: 'Uma fuga de prisão cooperativa para dois jogadores.', plataforma: 'XboxOne' },
  { id: 56, nome: 'Control', preco: 84.9, imagem: '/XBOX-ONE/Control-Xbox-One-_.jpg', descricao: 'Ação sobrenatural em um edifício governamental instável.', plataforma: 'XboxOne' },
  { id: 57, nome: 'Cyberpunk 2077', preco: 119.9, imagem: '/XBOX-ONE/cyberpunk.jpg', descricao: 'RPG de mundo aberto em Night City.', plataforma: 'XboxOne' },
  { id: 58, nome: 'Doom Eternal', preco: 99.9, imagem: '/XBOX-ONE/doometernal.jpg', descricao: 'O Slayer retorna para exterminar as forças do inferno.', plataforma: 'XboxOne' },
  { id: 59, nome: 'Ghost Recon', preco: 79.9, imagem: '/XBOX-ONE/ghostreacon.jpg', descricao: 'Ação tática militar em mundo aberto.', plataforma: 'XboxOne' },
  { id: 60, nome: 'Halo 5: Guardians', preco: 89.9, imagem: '/XBOX-ONE/halo5.jpg', descricao: 'Master Chief enfrenta uma nova ameaça à galáxia.', plataforma: 'XboxOne' },
  { id: 61, nome: 'Resident Evil 3', preco: 89.9, imagem: '/XBOX-ONE/re3.jpg', descricao: 'Jill Valentine foge do implacável Nemesis.', plataforma: 'XboxOne' },
  { id: 62, nome: 'Red Dead Redemption 2', preco: 149.9, imagem: '/XBOX-ONE/reddead2.jpg', descricao: 'A saga final da gangue Van der Linde no velho oeste.', plataforma: 'XboxOne' },

  // ===== PS4 =====
  { id: 63, nome: 'Bloodborne', preco: 99.9, imagem: '/PS4/01-bloodborne-ps4-box-art.jpg', descricao: 'Ação sombria e desafiadora em Yharnam.', plataforma: 'PS4' },
  { id: 64, nome: 'Shadow of the Colossus', preco: 89.9, imagem: '/PS4/02-shadow-of-the-colossus-box-art-ps4.jpg', descricao: 'Derrote colossos gigantes em um mundo melancólico.', plataforma: 'PS4' },
  { id: 65, nome: 'Dragon Age: Inquisition', preco: 79.9, imagem: '/PS4/03-dragon-age-inquisition-ps4-box-art.jpg', descricao: 'RPG épico de fantasia em mundo aberto.', plataforma: 'PS4' },
  { id: 66, nome: 'NieR Replicant ver.1.22474487139', preco: 109.9, imagem: '/PS4/05-nier-replicant-ver-1-22474487139-ps4-box-art.jpg', descricao: 'Uma história emocional sobre um irmão em busca da cura da irmã.', plataforma: 'PS4' },
  { id: 67, nome: 'Metal Gear Solid V: The Phantom Pain', preco: 99.9, imagem: '/PS4/06-metal-gear-solid-v-the-phantom-pain-box-art-ps4.jpg', descricao: 'Big Boss busca vingança em mundo aberto.', plataforma: 'PS4' },
  { id: 68, nome: 'Persona 5', preco: 109.9, imagem: '/PS4/07-persona-5-steelbook-launch-edition-ps4-box-art.jpg', descricao: 'RPG estiloso sobre ladrões fantasmas em Tóquio.', plataforma: 'PS4' },
  { id: 69, nome: 'Far Cry 5', preco: 89.9, imagem: '/PS4/08-farcry-5-box-art-ps4.jpg', descricao: 'Enfrente um culto fanático no interior dos EUA.', plataforma: 'PS4' },
  { id: 70, nome: 'Borderlands 3', preco: 99.9, imagem: '/PS4/09-borderlands-3-box-art-ps4.jpg', descricao: 'Caça a tesouros e tiro cooperativo insano.', plataforma: 'PS4' },
  { id: 71, nome: 'Doom', preco: 89.9, imagem: '/PS4/10-doom-reverse-cover-ps4-box-art.jpg', descricao: 'Ação brutal e rápida contra hordas demoníacas.', plataforma: 'PS4' },
  { id: 72, nome: 'BioShock: The Collection', preco: 99.9, imagem: '/PS4/11-bioshock-the-collection-box-art-ps4.jpg', descricao: 'Os três jogos da saga BioShock remasterizados.', plataforma: 'PS4' },
  { id: 73, nome: 'Batman: Arkham Knight', preco: 99.9, imagem: '/PS4/12-batman-arkham-knight-ps4-box-art.jpg', descricao: 'O confronto final entre Batman e o Espantalho.', plataforma: 'PS4' },
  { id: 74, nome: 'God of War', preco: 119.9, imagem: '/PS4/13-god-of-war-day-one-edition-box-art-ps4.jpg', descricao: 'Kratos e Atreus em uma jornada pela mitologia nórdica.', plataforma: 'PS4' },
  { id: 75, nome: 'Until Dawn', preco: 79.9, imagem: '/PS4/14-until-dawn-box-art-ps4.jpg', descricao: 'Terror interativo onde suas escolhas decidem quem sobrevive.', plataforma: 'PS4' },
  { id: 76, nome: "Marvel's Spider-Man", preco: 109.9, imagem: '/PS4/15-marvels-spider-man-ps4-box-art.jpg', descricao: 'Balance-se por Nova York como o Homem-Aranha.', plataforma: 'PS4' },
  { id: 77, nome: 'Detroit: Become Human', preco: 89.9, imagem: '/PS4/detroitbecomehuman.jpg', descricao: 'Uma narrativa ramificada sobre androides e livre-arbítrio.', plataforma: 'PS4' },
  { id: 78, nome: 'Ghost of Tsushima', preco: 119.9, imagem: '/PS4/ghostoftsushima.jpg', descricao: 'Torne-se um samurai lendário no Japão feudal.', plataforma: 'PS4' },
  { id: 79, nome: 'Red Dead Redemption 2', preco: 149.9, imagem: '/PS4/red-dead-2.jpg', descricao: 'A saga final da gangue Van der Linde no velho oeste.', plataforma: 'PS4' },
  { id: 80, nome: 'The Last of Us Part II', preco: 119.9, imagem: '/PS4/tlou2.jpg', descricao: 'Ellie parte em uma jornada de vingança implacável.', plataforma: 'PS4' },
];

  listarPorPlataforma(plataforma: string): Produto[] {
    return this.produtos.filter(
      p => p.plataforma.toLowerCase() === plataforma.toLowerCase()
    );
  }

  buscarPorNome(termo: string): Produto[] {
    const texto = termo.toLowerCase().trim();
    return this.produtos.filter(p => p.nome.toLowerCase().includes(texto));
  }
}