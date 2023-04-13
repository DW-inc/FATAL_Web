// Cindy
import Big_CindyImg from 'src/assets/characters/CINDY/CINDY.png'
import Small_CindyImg from 'src/assets/characters/CINDY/Small_CINDY.png'
// Cindy Weapon
import CINDY_Weapon from 'src/assets/characters/CINDY/weapon.png'
// Cindy Skill
import CINDY_Skill_one from 'src/assets/characters/CINDY/skill_one.png'
import CINDY_Skill_two from 'src/assets/characters/CINDY/skill_two.png'
import CINDY_Skill_three from 'src/assets/characters/CINDY/skill_three.png'
// Cindy Header Img
import CINDY_HEADER_IMG from 'src/assets/characters/CINDY/id_cindy.png'
// Cindy Bg
import CINDY_Page_Bg from 'src/assets/characters/CINDY/CindyBg.png'
// Alisha
import Big_ALISHAImg from 'src/assets/characters/ALISHA/ALLISHA.png'
import Small_ALISHAImg from 'src/assets/characters/ALISHA/Small_ALISHA.png'
// Alisha Weapon
import ALISHA_Weapon from 'src/assets/characters/ALISHA/weapon.png'
// Alisha Skill
import ALISHA_Skill_one from 'src/assets/characters/ALISHA/skill_one.png'
import ALISHA_Skill_two from 'src/assets/characters/ALISHA/skill_two.png'
import ALISHA_Skill_three from 'src/assets/characters/ALISHA/skill_three.png'
// Alisha Header Img
import ALISHA_HEADER_IMG from 'src/assets/characters/ALISHA/id_allisha.png'
// Alisha Bg
import Alisha_Page_bg from 'src/assets/characters/ALISHA/Allishabg.png'

// Grady
import Big_GRADYImg from 'src/assets/characters/GRADY/GRADY.png'
import Small_GRADYImg from 'src/assets/characters/GRADY/Small_GRADY.png'
// Grady Weapon
import GRADY_Weapon from 'src/assets/characters/GRADY/weapon.png'
// Grady Skill
import GRADY_Skill_one from 'src/assets/characters/GRADY/skill_one.png'
import GRADY_Skill_two from 'src/assets/characters/GRADY/skill_two.png'
import GRADY_Skill_three from 'src/assets/characters/GRADY/skill_three.png'
// GRADY Header Img
import GRADY_HEADER_IMG from 'src/assets/characters/GRADY/id_grady.png'
// Grady
import Grady_Page_Bg from 'src/assets/characters/GRADY/GradyBg.png'

// Koonsman
import Big_KOONSMANImg from 'src/assets/characters/KOONSMAN/KOONSMAN.png'
import Small_KOONSMANImg from 'src/assets/characters/KOONSMAN/Small_KOONSMAN.png'
// Koonsman Weapon
import KOONSMAN_Weapon from 'src/assets/characters/KOONSMAN/weapon.png'

// Koonsman Skill
import KOONSMAN_Skill_one from 'src/assets/characters/KOONSMAN/skill_one.png'
import KOONSMAN_Skill_two from 'src/assets/characters/KOONSMAN/skill_two.png'
import KOONSMAN_Skill_three from 'src/assets/characters/KOONSMAN/skill_three.png'

// KOONSMAN Header Img
import KOONSMAN_HEADER_IMG from 'src/assets/characters/KOONSMAN/id_koonsman.png'
// Koonsman Bg
import Koonsman_Page_bg from 'src/assets/characters/KOONSMAN/KoonsmanBg.png'

// Michelle
import Big_MICHELLEImg from 'src/assets/characters/MICHELLE/MICHELLE.png'
import Small_MICHELLEImg from 'src/assets/characters/MICHELLE/Small_MICHELLE.png'
// Michelle Weapon
import MICHELLE_Weapon from 'src/assets/characters/MICHELLE/weapon.png'

// Michelle Skill
import MICHELLE_Skill_one from 'src/assets/characters/MICHELLE/skill_one.png'
import MICHELLE_Skill_two from 'src/assets/characters/MICHELLE/skill_two.png'
import MICHELLE_Skill_three from 'src/assets/characters/MICHELLE/skill_three.png'

// MICHELLE Header Img
import MICHELLE_HEADER_IMG from 'src/assets/characters/MICHELLE/id_michelle.png'
// MiChelle Bg
import Michelle_Page_bg from 'src/assets/characters/MICHELLE/MichelleBg.png'

//Ollie
import Big_OLLIEImg from 'src/assets/characters/OLLIE/OLLIE.png'
import Small_OLLIEImg from 'src/assets/characters/OLLIE/Small_OLIE.png'
// Ollie Weapon
import Ollie_Weapon from 'src/assets/characters/OLLIE/weapon.png'

// Ollie Skill
import Ollie_Skill_one from 'src/assets/characters/OLLIE/skill_one.png'
import Ollie_Skill_two from 'src/assets/characters/OLLIE/skill_two.png'
import Ollie_Skill_three from 'src/assets/characters/OLLIE/skill_three.png'

// Ollie Header Img
import Ollie_HEADER_IMG from 'src/assets/characters/OLLIE/id_ollie.png'
// Ollie Bg
import Ollie_Page_bg from 'src/assets/characters/OLLIE/OllieBg.png'

interface ICharacterStory {
  storyLine: string
}

export interface ICharacterHistory {
  history: string
}

export interface SkillAbility {
  skillName: string
  commandSkill: string
  url: string
}

export interface CharacterInfo {
  id: number
  ment: string
  name: string
  job: string
  charactermessage: string
  character_select_url: string
  character_example_url: string
  ambition: string
  weapon_url: string
  character_stroy: ICharacterStory[]
  character_history: ICharacterHistory[]
  skillAbility: SkillAbility[]
  header_img_url: string
  page_Bg: string
}

export const Request_CharacterInfo: CharacterInfo[] = [
  {
    id: 1,
    ment: `“All life is precious"`,
    name: 'ollie',
    job: 'Courier',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,

    character_select_url: `${Big_OLLIEImg.src}`,
    character_example_url: `${Small_OLLIEImg.src}`,
    character_stroy: [
      {
        storyLine: `Delivery man 'ollie', everything is unknown.`,
      },
      {
        storyLine: `He quickly stir around the Wreck town destroyed by the sinkhole accident.`,
      },
      {
        storyLine: `With where he came from, age, and identification remaining anonymous.`,
      },
      {
        storyLine: `He runs the battlefield with a goal of going up Dyson Sphere`,
      },
    ],
    character_history: [
      {
        history: `No one knows exactly when he began his career and what he did before. But what is found now is that he sends necessary objects at the fast pace \n to someone who needs wherever he is. It is even impossible for X, chief of CREED, to follow his whereabouts.`,
      },
      {
        history: `In the wake of the sinkhole accident, most telecommunication infrastructures used by the majority of the population devastated to the bottom \n level. Most devices except FAITH’s highly advanced devices, became obsolete and useless metal. Letter was the quickest and easiest instrument \n among other tools. Skillful people revived the original version of telecommunication devices, but it was a sort of mobile phone that was popular \n about two centuries ago. As a result, delivering goods was only available by people.\n So a “delivery man” appeared and Ollie was special among others.`,
      },
      {
        history: `Without his exact identity, he delivered goods faster than anyone else so long as appropriate amounts are paid to him. As if he knew locations, \n he sent Colony, bottom area of sinkhole, and even faith core. He remained unknown as even FAITH’s management bureau living in core enjoyed his \n delivery conveniently. He was in charge of a new delivery.`,
      },
      {
        history: `The sender remained anonymous. Destination was the debris of city under the sinkhole. Thanks to his team staff hacker, he was able to bypass the  \nfirst and second defense nets and eventually arrived at the destination earlier. “X” was a recipient. X suggested Ollie becoming a spy who can stir \n everywhere, but Ollie refused his proposal. But he said he would accept if he would receive enough amount of money. Ollie told X that he wants to \n go to Dyson Sphere. Regardless of why he wants to get there, X started to commission works to ollie with a promise to help him go to Dyson Sphere.`,
      },
    ],
    weapon_url: `${Ollie_Weapon.src}`,
    ambition: `Ali, the delivery man whose everything is veiled. He quickly digs through the city that was ruined by the sinkhole incident,\n whether it's his palm or his own. His origin, age, and identity are unknown. It runs on the battlefield for the purpose of getting\n on the Dyson Spear.`,
    skillAbility: [
      {
        skillName: 'Hey, Stop!',
        commandSkill: 'weapon skill',
        url: `${Ollie_Skill_one.src}`,
      },
      {
        skillName: 'Quickly! Perfectly!',
        commandSkill: 'E skill',
        url: `${Ollie_Skill_two.src}`,
      },
      {
        skillName: 'Hook \n',
        commandSkill: 'shift skill',
        url: `${Ollie_Skill_three.src}`,
      },
    ],
    header_img_url: `${Ollie_HEADER_IMG.src}`,
    page_Bg: `${Ollie_Page_bg.src}`,
  },
  {
    id: 2,
    ment: `“Hi~ I'm your idol, Cindy.”`,
    name: 'CINDY',
    job: 'Idol',
    charactermessage: `"Hello~\nI'm your idol, Cindy." `,
    ambition: `Idol Cindy! A job called an idol that was no longer needed in the Apocalypse era after the sinkhole incident, but she still claims to be an idol. Having gained psychotic and abnormal physical abilities through her work at the mining site,Once again, I'll use this power to make my debut as an idol on the battlefield idol!`,

    character_select_url: `${Big_CindyImg.src}`,
    character_example_url: `${Small_CindyImg.src}`,
    character_stroy: [
      {
        storyLine: `Idol Cindy! The job of idol is no long needed in the era of apocalypse after sinkhole accident`,
      },
      {
        storyLine: `But she still promotes herself as an idol.`,
      },
      {
        storyLine: `Mining gives her insanity and extraordinary physical abilities`,
      },
      {
        storyLine: `She will once again use these powers to make her debut as a battlefield idol!`,
      },
    ],
    character_history: [
      {
        history: `After long days of trainee life, Cindy made her debut as an idol successfully. She didn't bring fame to the mainstream sphere of huge popularity, she \n started to gain popularity step by step. However, being deeply hurt by tremendous stress arising from the entertainment industry life, she splits her \n personality into a distorted character and the public one.`,
      },
      {
        history: `Invited as a singer at the Dyson Sphere’s completion event, she is ready to be on the stage.`,
      },
      {
        history: `The sinkhole accident happened at that moment. Everything was sucked into the underground, but fortunately she survived amid the crises.`,
      },
      {
        history: `The job as an idol star was not critical to her immediate survival in the ravaged apocalyptic world, so no one was there to help or protect her.\n In  order to survive, she got into the shelter and volunteered to work to mine gems.`,
      },
      {
        history: `She put to work mining gems and link them with Halo, and as a side effect, a violent personality emerges in her.`,
      },
      {
        history: `As prisoners made up the vast majority of miners, she became more aggressive and increasingly resembled them. Using superhuman power as part \n of its side effects, she fled the mining site and started to live in between the ruins of the collapsed building.`,
      },
      {
        history: `One day, while stealing and wandering the mining site and surroundings, a stranger named “X” approached her. The anonymous person suggested \n her joining the group, giving her promise to create battlefield. Curious about X, she followed him. But she refused the suggestion, saying she would \n fight whenever she wants to join fighting not as Creed’s member.`,
      },
    ],
    weapon_url: `${CINDY_Weapon.src}`,
    skillAbility: [
      {
        skillName: 'Twinkle Twinkle',
        commandSkill: 'weapon skill',
        url: `${CINDY_Skill_one.src}`,
      },
      {
        skillName: 'Encore',
        commandSkill: 'E skill',
        url: `${CINDY_Skill_two.src}`,
      },
      {
        skillName: 'Hook',
        commandSkill: 'shift skill',
        url: `${CINDY_Skill_three.src}`,
      },
    ],
    header_img_url: `${CINDY_HEADER_IMG.src}`,
    page_Bg: `${CINDY_Page_Bg.src}`,
  },
  {
    id: 3,
    ment: `"I'm just fighting to save”`,
    name: 'Allisha',
    job: 'Nurse',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,

    character_select_url: `${Big_ALISHAImg.src}`,
    character_example_url: `${Small_ALISHAImg.src}`,
    character_stroy: [
      {
        storyLine: `Doctor ALLISHA with innate genius from intelligent doctor`,
      },
      {
        storyLine: `She got to know that there is something hidden from her gone father and his study.`,
      },
      {
        storyLine: `Working as a medic at a special military unit, she joins the army amid chaos as a daughter and a doctor to find out secrets.`,
      },
    ],
    character_history: [
      {
        history: `Chief of the largest hospital run by the global government FAITH, pioneer in the new medical technology. It was all descriptions of her father. Raised \n by her father, she naturally dreamed of becoming a doctor. Her father sincerely cared her and willing to tell her everything he knows. Inherited by \n outstanding genes from parents, soaked up everything her father passed on like a sponge.`,
      },
      {
        history: `Her father was strongly against the superhuman experiment conducted in the FAITH military force. The physical limits of humankind can be \n improved using technologies, but the very thing FAITH wanted was a "new human" itself.`,
      },
      {
        history: `So when her father sensed that his research within FAITH might be misused, he took everything and disappeared. One day Allisha searched his lab \n office to find out his whereabouts. Then she found a piece of the paper that describes the FAITH'S official military force.`,
      },
      {
        history: `A few years later, she was appointed to be a medic at the FAITH special military force. She worked hard with expectation that while undertaking \n important missions at the force, she would eventually get to know why her father disappeared. With knowledge transferred from her father and by \n improving fighting skills, she became a doctor who keeps studying and engages in military training. But the sinkhole accident happened just a few \n days later.`,
      },
      {
        history: `After sinkhole accident, relief was the most urgent task other than missions performed by the special military force. She commands medics and \n soldiers to carry out relief activities. She seemed like an angel after coming from Dyson Sphere and Core in order to perform relief activities`,
      },
      {
        history: `When she worked on relief, a delivery man named Ollie came to her. The way he entered the unit remains unrevealed, but he bypassed guards, came \n to her, and gave her some stuff. It was a research paper written by her father and another one is about CREED's terror plan. It didn’t take long for her \n to figure out what these mean.`,
      },
      {
        history: `His paper showed details on how to make human beings stronger, but all that was so inhumane. These are related to side effects such as \n superhuman power and mental disorder arising from the combination of HALO and gems he has recently studied. And also CREED’s terror plan.  She \n made requests to send her to the clinic at the inmate mining site thereafter.`,
      },
    ],
    weapon_url: `${ALISHA_Weapon.src}`,
    ambition: `Alicia, a doctor who inherited the genius of a genius doctor.She learns from her father's sudden disappearance and his research that there is a conspiracy.She became a military doctor for the special forces.He participates in the middle of chaos as a doctor and daughter to reveal all the secrets.`,
    skillAbility: [
      {
        skillName: 'Massive Fire',
        commandSkill: 'weapon skill',
        url: `${ALISHA_Skill_one.src}`,
      },
      {
        skillName: 'Healing Field',
        commandSkill: 'E skill',
        url: `${ALISHA_Skill_two.src}`,
      },
      {
        skillName: 'Hook \n',
        commandSkill: 'shift skill',
        url: `${ALISHA_Skill_three.src}`,
      },
    ],
    header_img_url: `${ALISHA_HEADER_IMG.src}`,
    page_Bg: `${Alisha_Page_bg.src}`,
  },
  {
    id: 4,
    ment: `"Now my designs \n   are used to destroy the world."`,
    name: 'GRady',
    job: 'Engineer',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,

    character_select_url: `${Big_GRADYImg.src}`,
    character_example_url: `${Small_GRADYImg.src}`,
    character_stroy: [
      {
        storyLine: `Having warned against the danger of Dyson Sphere, `,
      },
      {
        storyLine: `Grady went into jail and an inmate of the mining center.`,
      },
      {
        storyLine: `He made bombs with great potential and fled the prison.`,
      },
      {
        storyLine: `Then he joined the CREED and marched toward the battlefield.`,
      },
    ],
    character_history: [
      {
        history: `The boy unconsciously looking up the sky throughout the day to see Dyson Sphere created by scientists, and he was Grady. He was fascinated by \n metal floating in the sky and machines operated under an unknown principle from the moment when Dyson Sphere was made and assembled.\n From   at a certain point, having been inspired by Dyson Sphere, he enthusiastically kept making something.`,
      },
      {
        history: `After completing the top-notch college and graduate schools, at his age of 25, he earned a doctoral degree of engineering and chemistry in his early \n day. He then joined the Dyson Sphere project as an engineer. One day he was delightfully working on the Dyson Sphere production, one thing flashed \n across his mind that something wrong happened to the gravity device. But to resolve the problems, Dyson Sphere must be disassembled and the \n pace of production progress will be reduced almost by half. On his comment, FAITH’s control tower in charge of the production of Dyson Sphere \n paradoxically ordered to develop a new device to address its flaw. They could not give up enormous budgets from the production of Dyson Sphere \n and public support. As a result, Grady attempted to make it public, but went into jail.`,
      },
      {
        history: `After a long time. Imprisoned at the special jail along with other inmates, he was trapped into darkness without electricity, while feeling abnormal \n shakeup across the Dyson Sphere and hearing roars. When he saw light again, he was descending to the surface. He observed the brutal situation in \n the wake of the sinkhole accident. Having forced to move to the mining site along with other inmates, he was obligated to mine gems and combine \n gems with HALO. As part of the side effects of combining works, he gained engineering capabilities along with superhuman power. Then he fled the \n prison by combining bombs with gems at the mining site and ambushed into the wreck town.`,
      },
      {
        history: `Following the word-of-mouth, ‘X’ eventually found him.  Grady don't know how X knows, but X already knows that Faith is responsible for causing the \n sinkhole disaster, and approached him as X already knew who Grady is. Fascinated by what X believes based on the collapse of FAITH and public \n liberation, he joined the X’s group as an engineer at CREED and a fighter.`,
      },
    ],
    weapon_url: `${GRADY_Weapon.src}`,
    ambition: `Grady, who warned of the dangers of Dyson Spear, is put in jail and becomes a prisoner of the mine. Grady, who escaped by\nbuilding a bomb with his genius ability, joins CREED and heads to the battlefield to change the world.`,
    skillAbility: [
      {
        skillName: 'Backlash',
        commandSkill: 'weapon skill',
        url: `${GRADY_Skill_one.src}`,
      },
      {
        skillName: 'Kinetic Accel',
        commandSkill: 'E skill',
        url: `${GRADY_Skill_two.src}`,
      },
      {
        skillName: 'Hook ',
        commandSkill: 'shift skill',
        url: `${GRADY_Skill_three.src}`,
      },
    ],
    header_img_url: `${GRADY_HEADER_IMG.src}`,
    page_Bg: `${Grady_Page_Bg.src}`,
  },
  {
    id: 5,
    ment: `"It's a choice when you start, It won't be \n time to end it."`,
    name: 'koonsman',
    job: 'DrugDealer',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,

    character_select_url: `${Big_KOONSMANImg.src}`,
    character_example_url: `${Small_KOONSMANImg.src}`,
    character_stroy: [
      {
        storyLine: `Koonsman dominated the group with drugs shortly after appearing on the debris of sinkhole.`,
      },
      {
        storyLine: `No one else know about who he is, but his business abilities and cruelty were astonishing to everyone.`,
      },
    ],
    character_history: [
      {
        history: `Not everyone who falls into a sinkhole dies in a sinkhole disaster. Those survived rose up the sinkhole and lived in Colony, whereas those criminals \n who would come back to Colony would not be welcomed and started a new life based on the wreck town of sinkhole. In the early days of the \n disaster, people who had lived in the dark for a long time due to a lack of light became vulnerable to light as they became accustomed to the \n darkness. Eventually they were armed with masks and goggles and no one knew exactly each other. In the meantime, it was Koonsman who quietly \n entered and started to distribute drugs without any clear source.`,
      },
      {
        history: `It was simple in regard to the process of how Koonsman took control of the underground. In the name of sampling, he gave out drugs and received \n rewards with workforce or gems stolen from the mining site. Since gems were used as more creditworthy currency than money there, people and \n even black marketeer came to him. Drugs circulated underground eventually spread to impoverished communities through inmates who moved \n between the sinkhole and the Colony. As it originates from the underground, it was referred to as PANAX.`,
      },
      {
        history: `Widely known among the poor and criminals in Colony, PANAX became serious concerns to FAITH. Although drugs are under thorough supervision,\n the number of PANAX addicts steadily increased in the alleys of the colony like slowly permeating mold from unseen places. A group of fanatics who \n started to eat PANAX made matters worse. For clean-up, special forces were dispatched to the sinkhole debris several times, but it was of no use to \n capture who suddenly come out in their home ground. As a result, carrying out detection and removing distribution networks in Colony was the only \n way to prevent drugs.`,
      },
      {
        history: `By wielding his influence with fanatics and addicts in the underground, the leader ‘X’ of CREED stopped by him. X's proposal was not to merge their \n forces, but to coexist with each other's forces. X wanted CREED to be overshadowed by Koonsman's faction as it was seen as the biggest problem \n with FAITH. Instead, X decides to disclose CREED's activities so that Koonsman's faction can reap all the benefits of CREED's operation. Koonsman \n accepted this and began to engage in battles that also benefited him.`,
      },
    ],
    weapon_url: `${KOONSMAN_Weapon.src}`,
    ambition: `Koonsman, who appeared in the wreckage of a sinkhole and quickly gained power with drugs. No one knows who he is, His business skills and brutality are astonishing to everyone.`,
    skillAbility: [
      {
        skillName: 'Cluster Bomb',
        commandSkill: 'weapon skill',
        url: `${KOONSMAN_Skill_one.src}`,
      },
      {
        skillName: 'Gas Shell',
        commandSkill: 'E skill',
        url: `${KOONSMAN_Skill_two.src}`,
      },
      {
        skillName: 'Hook \n',
        commandSkill: 'shift skill',
        url: `${KOONSMAN_Skill_three.src}`,
      },
    ],
    header_img_url: `${KOONSMAN_HEADER_IMG.src}`,
    page_Bg: `${Koonsman_Page_bg.src}`,
  },
  {
    id: 6,
    ment: `"Now my designs \n   are used to destroy the world."`,
    name: 'michelle',
    job: 'BombSquad',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,

    character_select_url: `${Big_MICHELLEImg.src}`,
    character_example_url: `${Small_MICHELLEImg.src}`,
    character_stroy: [
      {
        storyLine: `She is a specialist at FAITH’s Explosive Ordanance Disposal specialist.`,
      },
      {
        storyLine: `While living boringly and monotonously, one day she found something new interesting while working on special works at the sinkhole.`,
      },
    ],
    character_history: [
      {
        history: `She is a explosive ordanance disposal specialist at the FAITH special terrorist mission unit. As she spent almost her entire life as a soldier since she \n became adult, she had not my friends or people close to her as she is rigid, inflexible, strict, and conservative`,
      },
      {
        history: `The sinkhole accident. The global catastrophic situation swayed her situation hard. Against this backdrop, regular military units are forced to put \n more focus on relief activities, and she was dispatched to the mission of identifying largely changed geographical locations and risk factors.`,
      },
      {
        history: `With the construction of Colony and Core and as a result new resources found, mining was launched and she met with Allisha at the mining site. \n Michelle saw her dedication and also acuteness, she found more attractive to her. With pure curiosity, Michelle became more interested in her.`,
      },
      {
        history: `Faith decides to send Michelle, a member of the explosive ordnance disposal team, to be the mine site manager.`,
      },
      {
        history: `Afterwards monotonous days continued. Inmates had to do the same thing every day, and she had no choice but to supervise them There was  the \n occasional bomb explosion, but she handled it by the book. One day, there happened bombing news, but the report was so strange. It was not \n “accident,” but the “event.”`,
      },
      {
        history: `When she came to the site, it was not just an ordinary bombing. It looked like the aftermath of an attack hit by enormous weapons. It was found \n that inmate Grady is the suspect of the accident after looking the worker list. Surprisingly, she was a specially treated inmate at the special prison \n of Dyson Sphere. Initially she was out of interest, but as she became interested in the situation, she saw a number of things that used to be \n invisible.`,
      },
      {
        history: `Drugs popularly traded between them. The presence of organization remaining private and shrouded in rumors. When she looked into it, her life \n under the sinkhole became increasingly delightful. Soon the order was delivered from FAITH Intelligence Agency as said “Remove the terrorist \n organization CREED and the group distributing drugs.`,
      },
      {
        history: `Allisha volunteered to a worker in charge of mining site protection office. Michelle found all happening very interesting and happy to see what \n would happen in the future.`,
      },
    ],
    weapon_url: `${MICHELLE_Weapon.src}`,
    ambition: `She is FAITH's bomb disposal specialist. While spending boring and boring days, she finds new fun by carrying out special missions at the sinkhole.`,
    skillAbility: [
      {
        skillName: 'Portable Missile',
        commandSkill: 'weapon skill',
        url: `${MICHELLE_Skill_one.src}`,
      },
      {
        skillName: 'AT Field',

        commandSkill: 'E skill',

        url: `${MICHELLE_Skill_two.src}`,
      },
      {
        skillName: 'HOOK',
        commandSkill: 'shift skill',
        url: `${MICHELLE_Skill_three.src}`,
      },
    ],
    header_img_url: `${MICHELLE_HEADER_IMG.src}`,
    page_Bg: `${Michelle_Page_bg.src}`,
  },
]
