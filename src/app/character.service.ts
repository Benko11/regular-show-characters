import { Injectable } from '@angular/core';

export interface Character {
  id: number;
  name: string;
  url: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characters: Character[];

  constructor() {
    this.characters = [
      {
        id: 1,
        name: 'Benson Dunwoody',
        url: 'benson.jpg',
        description: `
        Benson Dunwoody is one of the seven main characters of Regular Show. He is a gumball machine, and was originally known as The Park's manager in the entire series until the series finale, after the death of Mr. Maellard. As a manager, he is the boss of every park worker (with the exception of Pops). He has a short temper and tends to yell at his employees when they are not working (particularly Mordecai and Rigby). Although he may come across as abrasive, Benson is a kind individual that cares deeply about his employees' wellbeing. Benson's design made its debut in J.G. Quintel's animated short "2 in the AM PM", where one of the cashiers (voiced by Sam Marin, who would go on to voice Benson himself, along with Muscle Man and Pops) transformed into a prototype version of Benson after being drugged by some candy. It is possible his name came from another animated short by Quintel, titled "The Naive Man from Lolliland", in which a prototype version of Pops has a human chauffer named Benson. He then made his first official appearance in the Pilot.
        `,
      },
      {
        id: 2,
        name: 'Rigby',
        url: 'rigby.jpg',
        description: `Rigby is a main character in Regular Show, making an appearance in every episode. He was voiced by William Salyers. He is 3'5", making him 2'5" shorter than Mordecai and around 35 pounds. Rigby once played "Punchies" with Skips and lost (like he always does when playing Punchies), which resulted in a damaged butt cheek that required surgery. The result was that it looked like Rigby only had one butt cheek, instead of two. And as a result, his friends briefly called him "The One Cheek Wonder". During the time montage and the Park's 25 year reunion, Rigby was shown with a thick, brown mustache and thick black eyebrows, wrinkles near his eyes, and wearing an aqua green jacket over a white shirt.`,
      },

      {
        id: 3,
        name: 'Mordecai',
        url: 'mordecai.png',
        description: `Mordecai is one of the main characters in Regular Show. He was voiced by the show's creator, JG Quintel.

Working at the park alongside his best friend, Rigby, Mordecai was often considered the more sensible of the two, with a clear ambition to be seen as responsible to further his chances of having a good career, either as an artist or a pilot. Desperate to find a job, Mordecai and Rigby found an ad in a newspaper for a groundskeeping job at their local Park, with no experience necessary. Mordecai and Rigby visited the location and were greeted by Pops, who hired them on the spot. At the Park, they were given on-site accommodation in Pops' House, making them feel settled quite quickly.`,
      },
      {
        id: 4,
        name: 'Skips',
        url: 'skips.png',
        description: `Skips, originally known as Walks, is one of the seven main characters in Regular Show. He is an immortal yeti who works at the park as a groundskeeper. He helps Benson a lot, and fixes many of Mordecai and Rigby's mistakes. He is very wise, and has a knowledge of many things to those of the unknown, due to his past of immortality. Skips made his first appearance in the pilot. Skips is voiced by Mark Hamill.
        
        He has an interesting and mysterious past due to his immortality. Everybody relies on him to solve supernatural problems, and he almost always has the answer. There have only been a few occasions where he didn't know what to do, such as in "Brain Eraser" when, although he knew how to delete Mordecai's memory of Pops' nudity, he didn't know how to exit the videotape. He also couldn't fix error 219 on Mordecai and Rigby's computers. In "Skunked", his best ideas (a shower and coffee) didn't work, and in "Sugar Rush" he said to give Pops more sugar to stop his sugar rush when this only made it worse. However, Rigby knew what to do by giving him the opposite of more sugar: Benson's whole wheat donut. Skips also admit that he doesn't know what's wrong with Rigby in "This Is My Jam", and even goes so far as to give advice that indirectly worsens the situation.

`,
      },
      {
        id: 5,
        name: 'Muscle Man',
        url: 'muscle-man.png',
        description: `Mitchell "Mitch" Sorrenstein, often referred to as "Muscle Man", is one of the seven main characters of Regular Show. He is also one of the groundskeepers of the Park. He is a green, strong, and obese humanoid, who is often seen with his best friend, Hi Five Ghost. Muscle Man made his first debut as a cameo character in the Pilot. He made his first official appearance in "Just Set Up the Chairs". Muscle Man is voiced by Sam Marin.`,
      },
      {
        id: 6,
        name: 'Hi Five Ghost',
        url: 'high-five-ghost.jpg',
        description: `Hi Five Ghost (also known as Hi Fives, HFG, or Fives), is one of the seven main characters in Regular Show. He made his first debut in the non-canon "Pilot." He also made an official debut in the Season One episode "Just Set Up the Chairs," alongside his friend Muscle Man.`,
      },
      {
        id: 7,
        name: 'Pops',
        url: 'pops.jpg',
        description: `Pops Maellard (born Mega Kranus), is one of the seven main characters of Regular Show. He was the adoptive son of Mr. Maellard, who was originally the owner of the park until Benson owned the park as of the series finale. In Season 8, he was revealed to be the 'Chosen One' and 'The Embodiment of Pure Good' and was the twin brother of Anti-Pops, as both siblings were born on the planet Lolliland.`,
      },
      {
        id: 8,
        name: 'Thomas',
        url: 'thomas.jpg',
        description: `Thomas (born Nikolai) is a major recurring character in Regular Show. In his debut in the Season 4 premiere "Exit 9B," he is hired as an intern for the park and quickly becomes a part of the main cast of characters for the next two seasons. However, in the Season Six Special "The Real Thomas," he is revealed to be a Russian spy, but in the end, decides to double-cross the Russian government to save his friends and quickly goes into hiding. Thomas makes one more major appearance in the episode "Guys Night 2," and is then only seen again in Rigby's Graduation Day Special as a visual cameo.`,
      },
      {
        id: 9,
        name: 'Eileen Roberts',
        url: 'eileen.jpg',
        description: `Eileen Roberts is a major character in Regular Show. She was originally a waitress at The Coffee Shop and a student at the City College. During that time, she had a crush on Rigby. While turned off by her at first, Rigby does eventually begin to like her and become friends with her. They begin dating a few months before "Dumped at the Altar" and by the time of the 25th Park reunion in the finale they have gotten married and have two young adult daughters. She first appears in the Season Two episode Brain Eraser and is voiced by storyboard artist, Minty Lewis.`,
      },
      {
        id: 10,
        name: 'Margaret Smith',
        url: 'margaret.webp',
        description: `Margaret Smith is a recurring character in Regular Show. She is the daughter of Frank Smith and Denise Smith who worked at the Coffee Shop with Eileen for the first four seasons until she transferred colleges, got her journalism degree, and became a newswoman shortly before "Eileen Flat Screen", in Season Six.`,
      },
      {
        id: 11,
        name: 'Baby Ducks',
        url: 'baby-ducks.png',
        description: `The Baby Ducks are minor characters in Regular Show. They made their debut in the Season Two episode "A Bunch of Baby Ducks".`,
      },
      {
        id: 12,
        name: 'CJ',
        url: 'cj.jpg',
        description: `CJ (also known as "Cloudy Jay") is a recurring character on Regular Show, who made her debut in the Season Three episode "Yes Dude Yes", and later had a reoccurring role in Seasons Five and Six as Mordecai's second known girlfriend, until a love triangle between him and his ex girlfriend Margaret occurred which led to them breaking up in Dumped at the Altar. CJ is voiced by Linda Cardellini.`,
      },
      {
        id: 13,
        name: 'Mr. Maellard',
        url: 'mr-maellard.gif',
        description: `Mr. Maellard was a recurring character in Regular Show whose first name is currently unknown. He was the owner of The Park until the series finale, Benson's boss, the adoptive father of Pops, and husband of Mrs. Maellard until his demise. He had an office on the third story of the House where he is seldom seen. He made his first appearance in the Season Two Episode "Dizzy" and was voiced by the late David Ogden Stiers.`,
      },
      {
        id: 14,
        name: 'Gary',
        url: 'gary.jpg',
        description: `Gary (formally known as Gareth) is the messenger for the Guardians of Eternal Youth and the King of the planet, Synthos.`,
      },
      {
        id: 15,
        name: 'Death',
        url: 'death.png',
        description: `Death is a supporting character in Regular Show. He made his debut in the Season Two episode "Over the Top".`,
      },
      {
        id: 16,
        name: 'RGB2',
        url: 'rgb2.png',
        description: `RGB2 is a television set who starred in Mordecai and Rigby's favorite 80's sitcom, That's My Television. He appeared in the episode of the same name. RGB2 is voiced by Sam Marin.`,
      },
      {
        id: 17,
        name: 'Gene',
        url: 'gene.png',
        description: `Gene is a recurring antagonist in Regular Show. He is an egotistical vending machine and park manager of East Pines, a park that rivals against the Park. He is introduced in the show as Benson's rival but they later become acquainted as the series progresses.`,
      },
      {
        id: 18,
        name: 'Pam',
        url: 'pam.png',
        description: `Pamela, also known as Pam, is a character in Regular Show. She first appeared in "The Dome Experiment". She is one of the scientists to study the park workers. She and Benson formed a relationship in "Pam I Am", but they had to break up in "Fries Night" due to Benson being in space and not knowing either when or if he's coming back to Earth. Though after Benson returns with the remaining Park workers minus the deceased Pops, they got back together and rekindled their relationship and eventually married.`,
      },
      {
        id: 19,
        name: 'Don',
        url: 'don.jpg',
        description: `Don is Rigby's younger brother in Regular Show, despite being taller and classified as the older brother in his former friendship group. He makes his first appearance in the Season One episode "Don" and is voiced by Julian Dean.`,
      },
      {
        id: 20,
        name: 'The Hammer',
        url: 'the-hammer.png',
        description: `The Hammer is the boss of the video game Mordecai and Rigby played in "Rage Against the TV" and the main antagonist of the episode. He also appeared in Exit 9B. and Expert or Liar. The Hammer is the final boss of a nameless video game about a Karate Duo going through levels while having to defeat enemies, such as the Triple Thugs and the Big Pink Monster, who can only be defeated by "kicking them in the junk", which means to literally kick them in the pile of garbage they're carrying. The Hammer is the final boss in the game. He is invulnerable to regular attacks and takes away a whole life with a single attack. He can only be damaged when he's hit with furniture.﻿ While starting to play the game on a mysterious foreign television, A blackout occurred, the TV, game system, controllers, and plugs came to life and formed a blue holographic body around it, creating a physical form in the real world for the Hammer, who quickly proceeded to beat up Mordecai, Rigby, Pops, Skips, Muscle Man, and Hi Five Ghost. Even as far as killing Jimmy. Mordecai eventually remembered that furniture was the only way to beat him, so everyone grabbed anything they could find and started to hit the Hammer with it. Just as the Hammer was about to come down on Skips, Mordecai threw a chair to Skips, and the Hammer hit his crotch on the back of the chair. Mordecai and Rigby then killed him once and for all by pinning him down, grabbing the control pads in his hands, and defeating him in the game. And the city's power came back on.`,
      },
    ];
  }

  getCharacters() {
    return this.characters;
  }

  getCharacterById(id: number): Character {
    return this.characters.filter((character) => character.id === id)?.[0];
  }
}
