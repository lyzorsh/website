import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "lockfile",
    link: "https://doxiado.dev/",
    github: "doxiado-dev",
    icon: "https://cdn.discordapp.com/avatars/1363652581355819238/353d5b6b460e2fbe2c04a1c2c60f906d.png?size=4096",
    discord_id: "763141886834769980",
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
    name: "nova",
    link: "https://nova.dev",
    github: "Nova-Prolab",
    discord_id: "542192795289518086",
  },
  {
    name: "iduckfult",
    link: "https://duckccy.dev",
    github: "duckccy",
    discord_id: "573610301140762664",
  },
 
].sort((a, b) => {
  const topOrder = ["arespro", "cortex", "nyx"];
  if (topOrder.includes(a.name) && topOrder.includes(b.name)) return topOrder.indexOf(a.name) - topOrder.indexOf(b.name);
  if (topOrder.includes(a.name)) return -1;
  if (topOrder.includes(b.name)) return 1;
  return (b.projects?.length || 0) - (a.projects?.length || 0);
});