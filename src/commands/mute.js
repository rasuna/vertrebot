module.exports = {
  name: 'mute',
  description: 'Mute everyone in the voice channel',
  execute(message) {
    const channel = message.member.voice.channel;
    channel.members.forEach((member) => {
      member.voice.setMute(true);
    });
  },
};
