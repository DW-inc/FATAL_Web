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
  realName: string
  age: string
  homeWorld: string
  character_select_url: string
  character_example_url: string
  ambition: string
  weapon_url: string
  character_history: ICharacterHistory[]
  skillAbility: SkillAbility[]
}

export const Request_CharacterInfo: CharacterInfo[] = [
  {
    id: 1,
    ment: `“All life is precious"`,
    name: 'OLLIE',
    job: 'Courier',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,
    realName: 'realName',
    age: 'age',
    homeWorld: 'homeworld',

    character_select_url: '/characters/OLLIE/OLLIE.png',
    character_example_url: '/guide/character/OLIE.png',
    character_history: [
      {
        history: `I can't know what he did.However, only if you need, you need to deliver it quickly.X is impossible to chase his traces of CREED.`,
      },
      {
        history: `Since the sinkhole incident, the infrastructure of communication used by most people has fallen to the bottom. With the exception of FAITH's discontinued equipment, most devices have become incompetent scrap metal, and letters through languages that can be easily written are fast and easy. Of course, the people with technology succeeded in the primitive revival of communication devices, but it was just called a mobile phone that was popular 200 years ago. In the end, it was only physically possible to transfer the goods. Therefore, the job that appeared was special among the "delivery man" and Ali.`,
      },
      {
        history: `The identity is unknown, but if you pay the right price, it was delivered faster than anyone else. As if he knew the terrain well, he delivered colonies and sinkholes, even face cores. His presence was condoned by the ease of use of FAITH's administration, which lives in Core, so he took on a new delivery.`,
      },
      {
        history: `The delivery person is unknown. Destination is the remains of the city under the sinkhole. With the help of his team member, Hacker, he started delivering to avoid the primary and secondary defense networks and was able to reach his destination quickly. It was 'X' who received the delivery. X offered Ali to be a spy, who was free to come and go everywhere, but Ali refused. However, he said he would not refuse if he paid a full price. Ali told X that his purpose was to go to Dyson Spear. The purpose is unknown, but with a promise to help Ali later go to Dyson Spear, X began commissioning Ali to work.`,
      },
    ],
    weapon_url: '/characters/OLLIE/weapon.png',
    ambition: `Ali, the delivery man whose everything is veiled. He quickly digs through the city that was ruined by the sinkhole incident,\n whether it's his palm or his own. His origin, age, and identity are unknown. It runs on the battlefield for the purpose of getting\n on the Dyson Spear.`,
    skillAbility: [
      {
        skillName: 'trap bomb',
        commandSkill: 'weapon skill',
        url: '/characters/OLLIE/skill_one.png',
      },
      {
        skillName: 'Bomb delivery',
        commandSkill: 'E skill',
        url: '/characters/OLLIE/skill_two.png',
      },
      {
        skillName: 'Hook \n',
        commandSkill: 'shift skill',
        url: '/characters/OLLIE/skill_three.png',
      },
    ],
  },
  {
    id: 2,
    ment: `“Hi~ I'm your idol, Cindy.”`,
    name: 'CINDY',
    job: 'Idol',
    charactermessage: `"Hello~\nI'm your idol, Cindy." `,
    ambition: `Idol Cindy! A job called an idol that was no longer needed in the Apocalypse era after the sinkhole incident, but she still claims to be an idol. Having gained psychotic and abnormal physical abilities through her work at the mining site,Once again, I'll use this power to make my debut as an idol on the battlefield idol!`,
    realName: 'realName',
    age: 'age',
    homeWorld: 'homeworld',

    character_select_url: '/characters/CINDY/CINDY.png',
    character_example_url: '/guide/character/CINDY.png',
    character_history: [
      {
        history: `Cindy succeeded in debuting as an idol after a long training period. Although he did not make it to the big list as a rookie, he was gradually gaining popularity. However, she, who was hurt by the stress of her life in the entertainment industry and separated herself from her character in public, sometimes showed a tendency to be violent and not know where to go when people were away. At some point Dyson Spear is about to be completed. Invited as a guest singer for Dyson Spear's completion ceremony, she was getting ready to take the stage.`,
      },
      {
        history: `The sinkhole incident at that point. Everything was sucked underground, and she survived the whole thing. However, the job and status of an idol singer was not important to her immediate survival in the devastated Apocalypse world, so no one offered or protected her. She enters a shelter to survive and volunteers for gem mining. Soon after, she was put into the work of combining Gem with Halo with Gem Mining, and as a side effect, a violent personality was noticeable in her.`,
      },
      {
        history: `Since then, the prisoners start to occupy most of the mining sector, she has increased more violence with themselves, and her violence, and she lives with themselves.`,
      },
      {
        history: `One day, "X" appeared in front of her, who lived in violence looting the mining site and surroundings. Although she was an unknown person, I recommend you to join the organization you are creating because you will provide her with a constant battleground. She is curious about such "X" and accompanies him, but draws a line, saying she will be free to work and fight when she wants to.`,
      },
    ],
    weapon_url: '/characters/CINDY/weapon.png',
    skillAbility: [
      {
        skillName: 'flash of lightning',
        commandSkill: 'weapon skill',
        url: '/characters/CINDY/skill_one.png',
      },
      {
        skillName: 'sonic bomb',
        commandSkill: 'E skill',
        url: '/characters/CINDY/skill_two.png',
      },
      {
        skillName: 'Hook',
        commandSkill: 'shift skill',
        url: '/characters/CINDY/skill_three.png',
      },
    ],
  },
  {
    id: 3,
    ment: `"I'm just fighting to save”`,
    name: 'ALLISHA',
    job: 'Nurse',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,
    realName: 'realName',
    age: 'age',
    homeWorld: 'homeworld',

    character_select_url: '/characters/ALISHA/ALLISHA.png',
    character_example_url: '/guide/character/ALISHA.png',
    character_history: [
      {
        history: `World Government FAITH's largest hospital director. a pioneer in new technology medicine All of that was referring to her father. Alicia grew up under such a father and naturally had a dream of becoming a doctor. His father also considered Alicia pretty and had no hesitation in transferring a lot of knowledge, and Alicia, who inherited the genes of her competent parents, absorbed all the knowledge he delivered like a sponge.`,
      },
      {
        history: `His father was opposed to a superhuman experiment in FAITH's military service. The limitations of the human body could be supplemented by technological skills, but what FAITH wanted was "new humanity" itself. Therefore, her father disappeared with all the data when his research within FAITH was feared to be abused. Alicia searches her father's lab one day to find the whereabouts of her father, who suddenly disappeared, and finds a fragment of a document related to FAITH's regular army.`,
      },
      {
        history: `After a few years, she plays as a military officer of the FAITH regular group.If you take care of special part of special parts, he/she was considered to face the truth that his father will face the truth that his father's death disappeared.It was a doctor to fight and training based on numerous knowledge and training based on numerous knowledge of knowledge and training.However, the sink hole was happening.`,
      },
      {
        history: `Since the sink hole situation, it was urgent than the special appointment of the military service needed immediately after the sink hole.She had a relief activities and played relief activities.Her appearance and the core of Dison activities and the relief activities were like a genius that came down from the sky. When it is sold out of relief activities, the delivery department visited her.He doesn't know what way came into her, but he reached her grave surveillance and handed over to her.It's a study data of father.And a terrorist plan of Chris.She didn't take a long time to understand what means.`,
      },
      {
        history: `Her father's research data included data on making humans stronger, but it was anti-human, and it was related to the superhuman abilities and insanity caused by the combination side effects of Halo and Gem, which he had recently studied. And the terror plan. She asks for dispatch to the clinic at the prisoner's mining site on that way.`,
      },
    ],
    weapon_url: '/characters/ALISHA/weapon.png',
    ambition: `Alicia, a doctor who inherited the genius of a genius doctor.She learns from her father's sudden disappearance and his research that there is a conspiracy.She became a military doctor for the special forces.He participates in the middle of chaos as a doctor and daughter to reveal all the secrets.`,
    skillAbility: [
      {
        skillName: 'RAIL GUN \n',
        commandSkill: 'weapon skill',
        url: '/characters/ALISHA/skill_one.png',
      },
      {
        skillName: 'HILL CAPSULE \n',
        commandSkill: 'E skill',
        url: '/characters/ALISHA/skill_two.png',
      },
      {
        skillName: 'Hook \n',
        commandSkill: 'shift skill',
        url: '/characters/ALISHA/skill_three.png',
      },
    ],
  },
  {
    id: 4,
    ment: `"Now my designs \n   are used to destroy the world."`,
    name: 'GRADY',
    job: 'Engineer',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,
    realName: 'realName',
    age: 'age',
    homeWorld: 'homeworld',

    character_select_url: '/characters/GRADY/GRADY.png',
    character_example_url: '/guide/character/GRADY.png',
    character_history: [
      {
        history: `A boy who looks up at the sky in rapture all day to see the Dyson Spear scientists create. He was Grady. Grady has been fascinated by machines operated by iron and unknown principles in the sky since the time Dyson Spear was built and assembled. From one point on, he was constantly making things, irresistibly inspired by Dyson Spear.`,
      },
      {
        history: `After studying at one of mankind's leading universities, graduate schools, and research courses, he became a doctor of public and chemistry at a very early age at the age of 25, and joined the Dyson Spear Project. I was so excited and spent every day working hard on the production of Spear. He realizes that the gravitational device is defective. However, in order to solve the abnormality of the gravity device, the Dyson Spear will be dismantled again, and the production progress will drop to less than half. FAITH's command and control department, which is in charge of producing Dyson Spear, only contradicting his opinion to develop a new device to solve the problem of gravity devices. They couldn't give up the huge budget and popular support from the Dyson Spear production. Eventually, Grady is imprisoned for attempting to inform the public.`,
      },
      {
        history: `How long has it been? Grady, while being locked up in Dyson Spear's special prison with other prisoners, is consumed by the darkness of the power-off prison, feeling an unknown roar and abnormal shaking throughout Dyson Spear. When he saw the light again, he was going down to the ground. What he witnessed there was the aftermath of the disastrous sinkhole. He is taken to a mining site with other prisoners and mobilized for gem mining and combining Halo and Gem.`,
      },
      {
        history: `There, he gains engineering superpowers along with superhuman powers as a side effect of combination work. After that, they escape by combining bombs and gems from the mining site, and hide in urban debris.With his escape, the combination of Jem and bombs is known, and the pandemic of bomb-type weapons begins, and "X" finds him after the rumor. Somehow X knew all FAITH's faults about the sinkhole and came to see Grady. Fascinated by X's belief in the collapse of FAITH and the liberation of the people, he follows X and joins CREED as an engineer and combatant.`,
      },
    ],
    weapon_url: '/characters/GRADY/weapon.png',
    ambition: `Grady, who warned of the dangers of Dyson Spear, is put in jail and becomes a prisoner of the mine. Grady, who escaped by\nbuilding a bomb with his genius ability, joins CREED and heads to the battlefield to change the world.`,
    skillAbility: [
      {
        skillName: 'powerful shotgun',
        commandSkill: 'weapon skill',
        url: '/characters/GRADY/skill_one.png',
      },
      {
        skillName: 'Acceleration gate',
        commandSkill: 'E skill',
        url: '/characters/GRADY/skill_two.png',
      },
      {
        skillName: 'Hook \n ',
        commandSkill: 'shift skill',
        url: '/characters/GRADY/skill_three.png',
      },
    ],
  },
  {
    id: 5,
    ment: `"It's a choice when you start, It won't be \n time to end it."`,
    name: 'KOONSMAN',
    job: 'DrugDealer',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,
    realName: 'realName',
    age: 'age',
    homeWorld: 'homeworld',
    character_select_url: '/characters/KOONSMAN/KOONSMAN.png',
    character_example_url: '/guide/character/KOONSMAN.png',
    character_history: [
      {
        history: `Not all those who fell under the sinkhole during the sinkhole crisis died. Some of the survivors climbed up the sinkhole again and lived in the colony, while those who were not welcome to return to the colony as criminals in the first place began a new life based on the remains of the sinkhole. In the early days of the situation, light did not come in well, so those who lived in the dark for a long time began to adapt to the darkness and become weak to the light. As a result, they lived armed with masks and goggles, and few people clearly knew each other's identity. In the meantime, it is Koonsman who secretly permeated and started spraying unknown drugs.`,
      },
      {
        history: `The process of Koonsman taking control of the underground was very simple. The drug was sprayed in the name of a sample and the drug was paid in gems taken from labor or mining sites. Under the sinkhole, Gem was a more certain commodity than money, so people began to flock around him and black traders began to flock. The drug, which started underground, spread to the slums through prisoners traveling between sinkholes and colonies, and was named [PANAX] because it came up from underground.`,
      },
      {
        history: `PANAX, which began to become popular among the poor and criminals in Colony, is becoming increasingly considered a headache for FAITH as well. Despite the thorough crackdown, the number of PANAX addicts increased in the back alleys of the colony, and the combination of fanatics who touched PANAX was the worst. Eventually, they sent a special lease to the sinkhole debris for several sweeps, but it was not enough to catch them newly appearing in their home ground. After all, crackdowns in the colony and finding and eliminating direct distribution networks were the only deterrents.`,
      },
      {
        history: `In the basement, which has expanded power to KREED's power to KREED.X's proposal is not a rule of tax.X was highlighted in the front of the FAITH, and wanted to cover themselves in the front of FAITH.
        Instead, X is signed a agreement that can be obtained information that can be obtained within it.
        Koonsman accepts X's proposal and starts fighting by taking advantage of CREED's operations.`,
      },
    ],
    weapon_url: '/characters/KOONSMAN/weapon.png',
    ambition: `Koonsman, who appeared in the wreckage of a sinkhole and quickly gained power with drugs. No one knows who he is, His business skills and brutality are astonishing to everyone.`,
    skillAbility: [
      {
        skillName: 'split-explosive bomb',
        commandSkill: 'weapon skill',
        url: '/characters/KOONSMAN/skill_one.png',
      },
      {
        skillName: 'poisonous cloud',
        commandSkill: 'E skill',
        url: '/characters/KOONSMAN/skill_two.png',
      },
      {
        skillName: 'Hook \n',
        commandSkill: 'shift skill',
        url: '/characters/KOONSMAN/skill_three.png',
      },
    ],
  },
  {
    id: 6,
    ment: `"Now my designs \n   are used to destroy the world."`,
    name: 'MICHELLE',
    job: 'BombSquad',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,
    realName: 'realName',
    age: 'age',
    homeWorld: 'homeworld',

    character_select_url: '/characters/MICHELLE/MICHELLE.png',
    character_example_url: '/guide/character/MICHELLE.png',
    character_history: [
      {
        history: `He is a specialist in bomb disposal as a member of the Special Task Force on Counter Terrorism under the FAITH. There were not many people around because he was a principled and inflexible principleist because he had lived as a soldier all his life since he grew up. Moreover, her face, which is always covered, did not even allow others to distinguish her gender.
        `,
      },
      {
        history: `The sinkhole crisis. The global catastrophe has shaken her situation greatly, too. The regular army became more focused on relief activities rather than its usual duties, and she was also sent to the scene to identify the greatly changed terrain and the resulting hazards.`,
      },
      {
        history: `The U.S. FAITH decides to send Michelle from the bomb squad down to the site's steward.Since then, every day has been a series of boredom. Prisoners who have to work the same every day and themselves who have to watch it the same. There were only accidents caused by bombs at times, but they only caused them according to the rules. One day news of a bomb accident came, but the report was strange. It's not an accident. It's an accident.When she arrived at the scene, it was more than an ordinary bomb exploded. A trace as if something had been attacked with a huge weapon, and through the Work and Human Resources Department, we find out that the suspect in the case was a prisoner named Grady. That's also a special prisoner in Dyson Spear Special Prison. She was not particularly interested in the scene, but after that, as she paid attention to the scene, she began to see various things that were not visible.drugs in vogue among them The existence of a veiled organization that is rumored to be. With a little attention, she began to enjoy life under the sinkhole. The FAITH intelligence agency's directive, which just came down at that time. [The deterrence of the terrorist organization CREED and the eradication of drug distribution]And Alicia volunteered to be the doctor at the mine shelter. Michelle is starting to find the whole situation interesting and exciting.`,
      },
    ],
    weapon_url: '/characters/MICHELLE/weapon.png',
    ambition: `She is FAITH's bomb disposal specialist. While spending boring and boring days, she finds new fun by carrying out special missions at the sinkhole.`,
    skillAbility: [
      {
        skillName: 'MISSILE \n ',
        commandSkill: 'weapon skill',
        url: '/characters/MICHELLE/skill_one.png',
      },
      {
        skillName: 'SHIELD \n ',

        commandSkill: 'E skill',

        url: '/characters/MICHELLE/skill_two.png',
      },
      {
        skillName: 'HOOK \n ',
        commandSkill: 'shift skill',
        url: '/characters/MICHELLE/skill_three.png',
      },
    ],
  },
  {
    id: 7,
    ment: `“All life is precious"`,
    name: 'COMMING SOON',
    job: 'delivery',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,
    realName: 'realName',
    age: 'age',
    homeWorld: 'homeworld',
    character_select_url: '/characters/MICHELLE.png',
    character_example_url: '/guide/character/MICHELLE.png',
    character_history: [
      {
        history: '',
      },
      {
        history: '',
      },
      {
        history: '',
      },
    ],
    weapon_url: '/characters/MICHELLE/weapon.png',
    ambition: `Idol Cindy! A job called an idol that was no longer needed in the Apocalypse era after the sinkhole incident, but she still claims to be an idol. Having gained psychotic and abnormal physical abilities through her work at the mining site,Once again, I'll use this power to make my debut as an idol on the battlefield idol!`,
    skillAbility: [
      {
        skillName: 'one',
        commandSkill: 'weapon skill',
        url: '/characters/MICHELLE/skill_one.png',
      },
      {
        skillName: 'two',
        commandSkill: 'E skill',
        url: '/characters/MICHELLE/skill_two.png',
      },
      {
        skillName: 'three',
        commandSkill: 'shift skill',
        url: '/characters/MICHELLE/skill_three.png',
      },
    ],
  },
  {
    id: 8,
    ment: `“All life is precious"`,
    name: 'COMMING SOON',
    job: 'delivery',
    charactermessage: `In accordance with my father's will, "All life is precious," I decided to be the fairest nurse.`,
    realName: 'realName',
    age: 'age',
    homeWorld: 'homeworld',

    character_select_url: '/characters/MICHELLE.png',
    character_example_url: '/guide/character/MICHELLE.png',
    character_history: [
      {
        history: '',
      },
      {
        history: '',
      },
      {
        history: '',
      },
    ],
    weapon_url: '/characters/MICHELLE/weapon.png',
    ambition: `Idol Cindy! A job called an idol that was no longer needed in the Apocalypse era after the sinkhole incident, but she still claims to be an idol. Having gained psychotic and abnormal physical abilities through her work at the mining site,Once again, I'll use this power to make my debut as an idol on the battlefield idol!`,
    skillAbility: [
      {
        skillName: 'one',
        commandSkill: 'weapon skill',
        url: '/characters/MICHELLE/skill_one.png',
      },
      {
        skillName: 'two',
        commandSkill: 'E skill',
        url: '/characters/MICHELLE/skill_two.png',
      },
      {
        skillName: 'three',
        commandSkill: 'shift skill',
        url: '/characters/MICHELLE/skill_three.png',
      },
    ],
  },
]
