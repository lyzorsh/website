import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "cache",
    link: "https://github.com/x2dh",
    github: "x2dh",
    discord_id: "1243274323402293259",
  },
  {
    name: ".tyoudm",
    link: "https://github.com/",
    github: "",
    discord_id: "",
  },
  {
    name: "zamu",
    link: "https://github.com/",
    discord_id: "",
    github: "",
  },
  {
    name: "vera",
    link: "https://t.me/mumri_k",
    discord_id: "1346505857369772085",
  },
  {
    name: "ic3",
    link: "https://ic3.cash/",
    discord_id: "1181174180578857036",
    github: "ic3",
    
  },
  {
    name: "doxiado",
    link: "https://doxiado.dev",
    discord_id: "763141886834769980",
    github: "doxiado-dev",
    projects: [
      {
        name: "coffin.vip",
        description:
          "The all-in-one Discord bot that brings your server to life with powerful moderation, music, and fun features",
        url: "https://github.com/bot-coffin",
        icon: "https://cdn.discordapp.com/avatars/1363652581355819238/353d5b6b460e2fbe2c04a1c2c60f906d.png?size=4096",
        type: "website" as const,
      },
    ],
  },
  {
    name: "wiremoney",
    link: "https://firebombed.icu/",
    discord_id: "865911778235908168",
    projects: [{
      name: "Meth Cloud",
      icon: "https://cdn.nest.rip/uploads/bebd0c2a-10dc-4020-a030-64939d5fe279.jpg",
      url: "https://t.me/MethCloudBot",
      description: "log drops, buy accounts, private hotmail and mixed cloud, etc",
      type: "website" as const,
    }],
  },
  {
    name: "iduckfult",
    link: "https://github.com/duckccy",
    github: "duckccy",
    discord_id: "617183072626016256",
  },
  {
    name: "confirmed",
    link: "https://hypixel.lol/",
    discord_id: "657587508837613580", // 1235921714425106493 seconds UserID incase 
    github: "euro-pol",
    projects: [
      {
        name: "Hypixel.lol",
        description: "Private Mail-solution.",
        url: "https://hypixel.lol/",
        icon: "https://media.discordapp.net/attachments/1369744751267418316/1372743786362306600/globe_1.png?ex=6827e2c7&is=68269147&hm=e30979dd77a95a354369c69e269ec5f87b354aebb40cab9fe79c5c5e04188eae&=&format=png&quality=lossless", // add logo later on - ares
        type: "website" as const,
  },
],
  },
  {
    name: "cyp",
    link: "https://privm.net/",
    discord_id: "667148181506883584",
    github: "cypdev",
    projects: [
      {
        name: "PriVM",
        description: "Privacy Focussed Hosting.",
        url: "https://privm.net/",
        icon: "https://privm.net/storage/logo.webp",
        type: "website" as const,
      },
    ],
  },
  {
    name: "Nova",
    link: "https://github.com/Nova-Prolab",
    discord_id: "542192795289518086",
    github: "Nova-Prolab",
  },
  {
    name: "bird",
    link: "#",
    discord_id: "1250561225733967938", //1095599396860723210 old userid incase of unterminated account
  },
  {
    name: "shintomu",
    link: "#",
    discord_id: "1013953531117568051", 
  },
  {
    name: "external",
    link: "#",
    discord_id: "1323491828648906855",
  },
  {
    name: "compile",
    link: "https://tempt.lol",
    discord_id: "659438962624167957",
    projects: [
      {
        name: "Tempt",
        description:
          "A powerful Discord bot for your community, with a focus on performance and reliability.",
        url: "https://tempt.lol",
        icon: "https://cdn.discordapp.com/avatars/1367774588750266408/a271d4855b63b329567c173cbd3557f9.png?size=1024",
        type: "website" as const,
      },
    ],
  }
 
].sort((a, b) => {
  const topOrder = ["arespro", "cortex", "nyx"];
  if (topOrder.includes(a.name) && topOrder.includes(b.name)) return topOrder.indexOf(a.name) - topOrder.indexOf(b.name);
  if (topOrder.includes(a.name)) return -1;
  if (topOrder.includes(b.name)) return 1;
  return (b.projects?.length || 0) - (a.projects?.length || 0);
});