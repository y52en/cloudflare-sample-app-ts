import {
  ApplicationCommandOptionType,
  InteractionContextType,
  RESTPutAPIApplicationCommandsJSONBody,
} from 'discord-api-types/v10';

type RESTPutAPIApplicationCommandsJSONBodyItem =
  RESTPutAPIApplicationCommandsJSONBody[number];

export const AWW_COMMAND: RESTPutAPIApplicationCommandsJSONBodyItem = {
  name: 'awwww',
  description: 'Drop some cuteness on this channel.',
};

export const INVITE_COMMAND: RESTPutAPIApplicationCommandsJSONBodyItem = {
  name: 'invite',
  description: 'Get an invite link to add the bot to your server',
};
