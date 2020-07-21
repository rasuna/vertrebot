module.exports = {
  name: 'mute',
  description: 'Mute everyone in the voice channel',
  execute(message) {
    const member = message.member;

    // Check member permission
    if (!member.hasPermission('MUTE_MEMBERS')) {
      return message.reply('You do not have permission to perform that command!');
    }

    // Mute members
    const channel = member.voice.channel;
    channel.members.forEach((member) => {
      member.voice.setMute(true);
    });
  },
};
